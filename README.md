# GameToys 🎮🧸

[**Live Demo**](https://video-gaming-toys.web.app/)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
  - [Navbar](#navbar)
  - [Authentication](#authentication)
  - [Private Routes](#private-routes)
  - [Pages](#pages)
    - [Add A Toy](#add-a-toy)
    - [All Toys](#all-toys)
    - [My Toys](#my-toys)
    - [Toy Details](#toy-details)
    - [404 Page](#404-page)
  - [Sorting System](#sorting-system)
- [Technologies Used](#technologies-used)
- [Client-Side Repository](#client-side-repository)
- [Server-Side Repository](#server-side-repository)
- [Installation](#installation)
- [License](#license)

---

## Introduction

**GameToys** is an engaging platform for toy enthusiasts to discover, add, and manage toys. The application offers a smooth user experience with features like authentication, private routes, search, sorting, and dynamic content display. It's designed to provide a user-friendly interface for browsing and managing toy collections.

---

## Features

### Navbar
- **Dynamic Navigation**: Includes links like `Home`, `All Toys`, `My Toys`, `Add A Toy`, `Blogs`, and user profile.
- **Conditional Rendering**:
  - Displays `Add A Toy`, `My Toys`, and user profile options only when the user is logged in.
  - Shows a `Login` button if the user is not logged in.
- **User Profile**:
  - Displays the user's profile picture with a hover tooltip showing the user's name (if available).

### Authentication
- **Login & Registration**:
  - Login page with fields for **Email/Password** and a **Google Sign-In** option.
  - Registration page with fields for **Name**, **Email**, **Password**, and **Photo URL**.
  - Displays relevant error messages for incorrect input.
- **Protected Routes**:
  - Certain pages are restricted to logged-in users only (e.g., `Add A Toy`, `My Toys`, `Toy Details`).

### Private Routes
The following pages are accessible only to authenticated users:
- **Add A Toy**: Allows users to add new toys with details like picture URL, toy name, seller info, sub-category, price, rating, quantity, and description.
- **My Toys**: Displays toys added by the logged-in user with options to **Update** or **Delete** them.
- **Toy Details**: Shows detailed information about a specific toy.

### Pages

#### Add A Toy
- Accessible only to logged-in users.
- Includes a form with fields for:
  - **Picture URL**
  - **Toy Name**
  - **Seller Name** (auto-filled from user profile)
  - **Seller Email** (auto-filled from user profile)
  - **Sub-Category**
  - **Price**
  - **Rating**
  - **Available Quantity**
  - **Detail Description**

#### All Toys
- Displays all toys added by users in a tabular format.
- Each row includes details like:
  - **Seller Name**
  - **Toy Name**
  - **Sub-Category**
  - **Price**
  - **Available Quantity**
- Includes a **Search** feature to find toys by name.
- Implements pagination to show a maximum of 20 results per page.

#### My Toys
- Displays toys added by the logged-in user in a tabular format.
- Provides options to:
  - **Update**: Edit toy details (price, quantity, description).
  - **Delete**: Remove a toy with a confirmation prompt.

#### Toy Details
- Shows detailed information about a specific toy, including:
  - **Picture**
  - **Toy Name**
  - **Seller Name & Email**
  - **Price**
  - **Rating**
  - **Available Quantity**
  - **Description**

#### 404 Page
- Custom 404 error page with an interesting image or GIF.
- Includes a **Back to Home** button.
- The header and footer are excluded on this page for a cleaner look.

### Sorting System
- **My Toys Page** includes a sorting feature to arrange toys in ascending or descending order based on **Price**.

---

## Technologies Used
- **Frontend**: React + Vite, Tailwind CSS
- **Authentication**: Firebase
- **Routing**: React Router
- **State Management**: React Context API

---

## Client-Side Repository
This repository contains the code for the **client-side** of the GameToys application.

- **Client-Side Repo**: [GameToys Client](https://github.com/EftekharAlam2/GameToys-client-side.git)

## Server-Side Repository
The server-side code, including database and API integrations, is available in a separate repository.

- **Server-Side Repo**: [GameToys Server](https://github.com/EftekharAlam2/GameToys-server-side.git)

---

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/EftekharAlam2/GameToys-client-side.git
    cd gametoys-client
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env` File**:
    - Add your Firebase configuration:
      ```
      VITE_FIREBASE_API_KEY=your_api_key
      VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
      VITE_FIREBASE_PROJECT_ID=your_project_id
      VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
      VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
      VITE_FIREBASE_APP_ID=your_app_id
      ```

4. **Run the Application**:
    ```bash
    npm run dev
    ```

5. **Build for Production**:
    ```bash
    npm run build
    ```
