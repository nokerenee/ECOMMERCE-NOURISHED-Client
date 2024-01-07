# NOURISHED.

Ecommerce Meal Delivey Service Website

## Table of Contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Credits](#credits)
- [Contact Information](#contact-information)

## Requirements

- Node.js installed
- MongoDB installed
- AWS account
- Twingate account
- EC2 instance created
- SSH key pair for EC2 instance
- Twingate Connector installed on the EC2 instance

## Installation

Server (Node.js, Express, MongoDB)

1. Clone Repository: <br/>
   git clone https://github.com/nokerenee/ECOMMERCE-NOURISHED-Server.git
3. Navigate to the server directory: <br/>
   cd server
4. Install server dependencies: <br/>
   npm install
5. Start the server: <br/>
   npm run dev

Client (React Typescript)

1. Clone Repository: <br/>
   git clone https://github.com/nokerenee/ECOMMERCE-NOURISHED-Client.git
2. Navigate to the server directory: <br/>
   cd client
3. Install client dependencies: <br/>
   npm install
4. Start the client: <br/>
   npm start
5. Open the browser and visit 'http://localhost:3000' to view the app

## Configuration

Step 1: Set up AWS EC2 Instance
1. Launch an EC2 instance on AWS
2. Ensure you have an SSH key pair associated with your EC2 instance

Step 2: Configure Twingate
1. Sign in to your Twingate account
2. Set up a new Resource for your EC2 instance
3. Install Twingate Connector on your EC2 instance following the Twingate documentation

Step 3: SSH into EC2 Instance
1. In your terminal: <br/>
   ssh -i path/to/your-key.pem ec2-user@your-ec2-instance-ip

Step 4: Access the Application
1. Open your browser and visit 'http://your-ec2-instance-ip:3001' to view the deployed app

## Credits

- Twingate
- MongoDB Atlas
- AWS EC2
- FontAwesome

## Contact Information

- GitHub: https://github.com/nokerenee
- Email: nrkelly57@gmail.com
