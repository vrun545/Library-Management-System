# Library Management System Web Application

This Library Management System is a web application built using various technologies including .NET 6, SSMS database, Angular, and Entity Framework. The system aims to efficiently manage a library's inventory, users, and borrowing/lending of books.

## Features

- **Secure Authentication:** Only valid users can access the homepage ensuring data security and user privacy.
- **Book Management:**
  - **Add New Books:** Signed-in users can add new books to the library database.
  - **View Available Books:** All available books are displayed on the homepage for easy browsing.
- **Borrowing and Lending Functionality:**
  - **List of Borrowed Books:** Users can view a list of books borrowed by them.
  - **List of Lent Books:** Admin or authorized personnel can view books lent out to users.
- **User Details:** Detailed information about users is stored and accessible within the system.

## Technologies Used

- **Backend:** .NET 6, Entity Framework
- **Frontend:** Angular
- **Database:** SQL Server Management Studio (SSMS)

## Few ScreenShots

![Screenshot (245)](https://github.com/vrun545/Library-Management-System/assets/63057049/60eda824-abed-4b20-80ac-effc5cef847c)

![Screenshot (246)](https://github.com/vrun545/Library-Management-System/assets/63057049/e11d2a2e-0d11-4c5c-bf85-8d21803253eb)

![Screenshot (247)](https://github.com/vrun545/Library-Management-System/assets/63057049/2127448b-3eca-4b24-bebb-f68cd1d17b5e)

![Screenshot (250)](https://github.com/vrun545/Library-Management-System/assets/63057049/10376b17-02bf-4789-be7b-2e3d18226970)



## Getting Started

To run this application locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/vrun545/Library-Management-System.git
   ```

2. **Backend Setup:**
   - Install .NET 6 SDK if not already installed.
   - Set up the database connection in the app settings.
   - Run migrations to create the necessary tables in the database.

3. **Frontend Setup:**
   - Install Node.js and npm if not already installed.
   - Navigate to the Angular project directory and run `npm install` to install dependencies.
   - Run `ng serve` to start the Angular development server.

4. **Accessing the Application:**
   - Open a browser and go to `http://localhost:4200` to access the application.

## Usage

1. **Homepage:** Upon successful login, users can view available books.
2. **Adding Books:** Signed-in users can add new books via the designated interface.
3. **Borrowing/Lending:** Users can view their borrowed books, while authorized personnel can view lent books.
4. **User Details:** Access and manage user details via the respective functionalities.

## Contributors

- List contributors or team members who have contributed to this project.

## License

Indicate the license under which this project is distributed.

## Acknowledgments

Mention any resources, libraries, or inspirations used in the project development.
