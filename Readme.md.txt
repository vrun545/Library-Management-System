# Library Management System - README

## Features

1. **Adding a Book:**
   - Logged-in users can add a book.
   - The added book should be borrowable by others.

2. **Showing Available Books:**
   - Display a list of books available for users to borrow.

3. **Token Functionality:**
   - Implement token functionality for borrowing books.
   - Each book borrowed adds 1 token to the lender and deducts 1 token from the borrower and vice-versa.

4. **Showing Book Details:**
   - Display details of a selected book, including name, author, genre, lender name, and rating.

5. **User Dashboard:**
   - Upon login, users should see a dashboard with:
     - Login and Logout buttons.
     - List of available books with columns (Book name, Author, Genre).
     - Add New Book button (Visible only to logged-in users).
     - User name and available tokens visible in the header (Visible only to logged-in users).

6. **Search Functionality:**
   - Users can search for a book using its name, author name, or genre.

7. **User Book Listing:**
   - Users can view a list of all books added or borrowed by them.

## Technology Used

1. **Database:**
   - SQL Management Studio or any compatible database tool can be used.

2. **Frontend:**
   - Angular is used for the Frontend technology.
   - Additional libraries: ngx-toastr, Bootstrap.

3. **Backend:**
   - ASP.NET 6 is used for the Backend.
   - MVC architecture and N-layer architecture:
     - Service logic as the Business Layer.
     - Controllers as the Presentation Layer.
     - Data as the Data & Model Folders Access Layer.
   - Exception Handling is done.

