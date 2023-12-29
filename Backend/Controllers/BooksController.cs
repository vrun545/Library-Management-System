using Backend.ServiceLogic;
using Backend.Data;
using Backend.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        private readonly IBookServices bookServices;

        public BooksController(IBookServices _bookServices)
        {
            bookServices = _bookServices;
        }

        [HttpGet]
        public async Task<IActionResult> getAllBooks()
        {
            try
            {
                var books = await bookServices.getAllBooks();
                return Ok(books);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> postBooks([FromBody] Books book)
        {
            try
            {
                await bookServices.postBooks(book);
                return Ok(book);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            try
            {
                var book = await bookServices.GetProductById(id);

                if (book == null)
                    return NotFound();

                return Ok(book);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> deletebook(int id)
        {
            try
            {
                var book = await bookServices.deletebook(id);

                if (book == null)
                    return NotFound();

                return Ok(book);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBook(int id, [FromBody] Books updatedBook)
        {
            try
            {
                var bookupdated = await bookServices.UpdateBook(id, updatedBook);

                if (bookupdated == null)
                    return NotFound();

                return Ok(bookupdated);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpGet("search/{currentlyBorrowed}")]
        public async Task<IActionResult> GetBorrowedBook(int currentlyBorrowed)
        {
            try
            {
                var book = await bookServices.GetBorrowedBook(currentlyBorrowed);
                return Ok(book);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpGet("searchmybooks/{lentbyID}")]
        public async Task<IActionResult> GetBookLent(int lentbyID)
        {
            try
            {
                var book = await bookServices.GetBookLent(lentbyID);
                return Ok(book);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
    }
}
