import json
import re

with open('/home/padoswaliaunty/projects/ecell_website/new_iic_website/scraped_current_site.md', 'r') as f:
    lines = [line.strip() for line in f.readlines()]

events = []
current_year = None
current_month = None

i = 0
while i < len(lines):
    line = lines[i]
    if line.startswith('Year - '):
        current_year = line.split('-')[1].strip()
        i += 7 # skip header
        continue
    
    if current_year:
        if line == 'Back to Top' or line.startswith('Year -'):
            pass
        elif line in ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']:
            current_month = line
            i += 1
            continue
        elif line.isdigit() and i + 5 < len(lines): # It's an Sl No
            # The next lines are Event Name, Date, Org, Collab, Participants
            event_name = lines[i+1]
            date = lines[i+2]
            org = lines[i+3]
            collab = lines[i+4]
            participants = lines[i+5]
            events.append({
                'year': current_year,
                'month': current_month,
                'sl_no': line,
                'event_name': event_name,
                'date': date,
                'organization': org,
                'cooperation': collab,
                'participants': participants
            })
            i += 5
    i += 1

with open('/home/padoswaliaunty/projects/ecell_website/new_iic_website/app/src/data/events.json', 'w') as f:
    json.dump(events, f, indent=2)

print(f"Parsed {len(events)} events.")
