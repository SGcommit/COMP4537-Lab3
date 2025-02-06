#Comp 4537 Internet Systems Architecture Lab3 - Node.js API Server 
## Author: Sohail Grewal

## Overview
Simple Node.js API server that provides three core functionalities:
- **Append text to a file (`file.txt`)**
- **Read the contents of `file.txt`**
- **Return a personalized greeting with the server's current date/time**


---

## Features

### 1. Append Text to `file.txt`
**Endpoint:**
```sh
GET /writeFile?text=YOUR_TEXT
```
**Description:**
- Appends the provided text to `file.txt`.
- If `file.txt` does not exist, it will be created.

**Example Request:**
```sh
GET https://comp4537-lab3-node-api.onrender.com/writeFile/?text=BCIT
```
**Example Response:**
```
Text successfully appended: BCIT
```

---

### 2. Read Contents of `file.txt`
**Endpoint:**
```sh
GET /readFile
```
**Description:**
- Returns the entire content of `file.txt`.
- If the file does not exist, returns a 404 error.

**Example Request:**
```sh
GET Read api link: https://comp4537-lab3-node-api.onrender.com/readFile/
```
**Example Response:**
```
BCIT
(Contents of file.txt)
```

---

### 3. Return a Personalized Greeting with Date/Time
**Endpoint:**
```sh
GET /getDate?name=YOUR_NAME
```
**Description:**
- Returns a friendly greeting along with the current server time.
- If no name is provided, it defaults to "Guest".

**Example Request:**
```sh
GET https://comp4537-lab3-node-api.onrender.com/getDate/?name=Sohail
```
**Example Response (Styled in Blue):**
```
Hello Sohail, What a beautiful day. Server current date and time is Wed Feb 05 2025 12:34:56 GMT-0800 (PST)
```

---

## Project Structure
```sh
/myFirstAPI
│── /modules
│   ├── fileHandler.js   # Handles file operations (append/read)
│   ├── utils.js         # Handles getDate function
│── /lang
│   ├── en.json          # Stores greeting message
│── server.js            # Main API server
│── file.txt             # Stores appended text (created dynamically)
│── package.json         # Project dependencies
```
##Chat gpt was used to generate template readme before editing.

