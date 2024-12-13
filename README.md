# Learn Japanese - Frontend Application

**Live Site:** [https://learnjapaneese.vercel.app/](https://learnjapaneese.vercel.app/)

## Overview

The **Learn Japanese** application is a responsive and fully functional React-based platform for learning the Japanese language. It supports two user roles — **Admin** and **User** — with different access levels to various features such as lesson access, vocabulary learning, user management, and content management. The application also offers a smooth user experience with pronunciation audio, navigation buttons, and a completion animation.

### Core Features:

- **Responsive Design:** Fully responsive across mobile, tablet, and desktop devices.
- **Vocabulary Display:** Users can view vocabulary words along with their pronunciation, meaning, and usage.
- **Pronunciation Audio:** Clicking a vocabulary word plays its pronunciation aloud.
- **Interactive Navigation:** A dynamic navbar and footer for easy navigation across the app.
- **Completion Animation:** A celebratory animation when users complete all vocabulary in a lesson.

---

## Technologies Used

- JavaScript
- React JS
- React Route Dom
- Tailwind CSS
- Redux Toolkit
- JWT
- React Icon
- React Hook form
- Confetti
- Speech Recognization

## Features and Functionality

### **Admin Role:**

Admins have full access to the system and can perform various tasks to manage content and users:

#### 1. **User Management:**

- Promote or demote users to **Admin** or **Normal User** status.
- View and manage all users.

#### 2. **Content Management:**

- Add new lessons with titles and numbers.
- Add vocabulary to lessons with details like word, pronunciation, and when to use.

#### 3. **Tutorial Management:**

- Embed and manage YouTube tutorial links for each lesson.

### **User Role:**

Users have access to the lessons and vocabulary items created by the Admin. They can engage with lessons, listen to vocabulary pronunciation, and track their learning progress.

#### 1. **Lesson Access:**

- View and study lessons made available by the Admin.

#### 2. **Vocabulary Access:**

- Access vocabulary sets for each lesson and hear the correct pronunciation of each word.

---

## Layout Structure

### **User Interface:**

The user interface is intuitive and designed for both **Users** and **Admins**.

#### **For Users:**

- **Navbar:** Includes the logo and navigation links for easy access to different parts of the app.
- **Footer:** Provides additional links and information.
- **Pages:**
  - **Lessons:** Displays all available lessons.
  - **Tutorials:** A page showcasing embedded YouTube tutorials.
  - **Login:** Allows users to authenticate.
  - **Register:** Allows new users to sign up.

#### **For Admin:**

- **Dashboard:** A central hub for managing content and overseeing user activity.
- **Pages:**
  - **Lessons:** View and manage all lessons.
  - **Add Lessons:** Add new lessons to the system.
  - **Add Vocabularies:** Add new vocabulary to lessons.
  - **Manage Users:** Manage user roles (promote or demote users).
  - **Lesson Management:** Manage lesson details (add, update, or delete).
  - **Vocabulary Management:** Manage vocabulary entries (add, update, or delete).

---

## Registration and Login

### **Registration:**

New users need to provide the following details:

- **Name:** Full name.
- **Email:** A unique email address.
- **Profile Photo:** Option to upload a photo.
- **Password:** A secure password for account protection.

Upon successful registration, the user's account is created and stored securely.

### **Login:**

Users can log in using:

- **Email:** The registered email.
- **Password:** The user’s password.

---

## Routing and Role-Based Access Control

### **Route Protection:**

- If a user is not logged in, they are redirected to the **Login** page.
- Normal users are redirected to the **Lessons** page upon login.
- Admins are redirected to the **Dashboard** upon login.

---

## Admin Features

### **Lesson Management:**

1. **Create a Lesson:** Admins can add a new lesson with:
   - **Lesson Name:** The title of the lesson.
   - **Lesson Number:** A unique identifier for each lesson.
2. **View All Lessons:** Admins can view a list of all lessons, including:

   - Lesson Name
   - Lesson Number
   - Vocabulary Count (Number of vocabularies linked to the lesson)

3. **Update/Edit a Lesson:** Admins can modify existing lessons (change name, number, etc.).
4. **Delete a Lesson:** Admins can delete lessons after confirmation.

### **Vocabulary Management:**

1. **Create a Vocabulary:** Admins can add new vocabulary with:
   - **Word:** The Japanese word.
   - **Pronunciation:** Correct pronunciation of the word.
   - **Meaning:** Explanation of the word’s meaning.
   - **When to Say:** Context of when the word should be used.
   - **Lesson No:** The lesson the vocabulary belongs to.
2. **View All Vocabularies:** Admins can see a list of all vocabularies, with options to update or delete each entry.
3. **Update/Edit Vocabulary:** Admins can modify the word, pronunciation, meaning, or lesson number.
4. **Delete Vocabulary:** Admins can delete vocabulary entries after confirmation.

### **User Management:**

1. **View All Users:** Admins can view a list of all users, including:

   - User Name
   - Email
   - Current Role (Admin or User)

2. **Update User Role:** Admins can:
   - **Promote to Admin:** Change a user’s role to Admin.
   - **Demote to User:** Revert an Admin’s role to Normal User.

---

## User Features

### **Learning System for Users:**

1. **Access Lessons:**
   - Users can view available lessons and click on them to access the lesson details.
2. **Vocabulary Learning:**

   - Vocabulary is displayed with all details: word, pronunciation, meaning, and usage.
   - **Pagination:** Vocabulary words can be navigated using **Next** and **Previous** buttons.

3. **Pronunciation:**
   - Clicking on a vocabulary word will play the pronunciation aloud.
4. **Completion of Lesson:**
   - When all vocabulary for a lesson is shown, a **Complete** button appears.
   - Clicking **Complete** triggers a fun **confetti animation** to celebrate completion.

---

## Setup and Installation

### **Prerequisites:**

- Node.js (v14 or higher)
- NPM or Yarn

### **Steps:**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/learn-japanese-frontend.git
   cd learn-japanese-frontend
   ```
