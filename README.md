cat > ~/gradnext/README.md << 'EOL'
# gradnext - Career Acceleration Platform

vercel link :-https://gradnext-frontend-v2.vercel.app/

render link:-https://gradnext-backend.onrender.com


## 🚀 Project Overview

This project consists of two main assignments:
1. **Landing Page**: A responsive, modern landing page for gradnext
2. **Email Automation**: Automated cohort enrollment workflow with intelligent follow-up sequences

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Email Automation Logic](#email-automation-logic)
- [Testing](#testing)
- [Deployment](#deployment)

## ✨ Features

### Landing Page (Assignment 1)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Hero section with call-to-action
- ✅ Features showcase
- ✅ Testimonials section
- ✅ Interactive cohort application form
- ✅ Contact footer

### Email Automation (Assignment 2)
- ✅ Form submission handling
- ✅ Automated email sequences
- ✅ Email tracking (open, click, payment, reply)
- ✅ Intelligent follow-up logic
- ✅ Admin dashboard API endpoints
- ✅ SQLite database for data persistence

## 🛠️ Tech Stack

### Frontend
- React 18
- Tailwind CSS (via CDN)
- Axios for API calls
- Responsive design

### Backend
- Node.js & Express
- SQLite3 database
- Nodemailer for emails
- node-cron for scheduling
- UUID for tracking IDs

## 📦 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Gmail account with App Password (for email functionality)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gradnext
   
Install Frontend Dependencies
# Navigate to frontend directory
cd frontend

# Install all dependencies
npm install

# This will install:
# - React and React DOM
# - Axios for API calls
# - Testing libraries
# - React Scripts for build tools

Install backend Dependencies
# Navigate to backend directory (from root)
cd ../backend

# Install all dependencies
npm install

# This will install:
# - Express.js server
# - SQLite3 database
# - Nodemailer for emails
# - Node-cron for scheduling
# - Other utilities

# Stay in backend directory
# Create/edit .env file
nano .env


Configure Environment Variables
# Add the following (replace with your actual credentials):
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
