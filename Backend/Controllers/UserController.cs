using Backend.Data;
using Backend.Migrations;
using Backend.Model;
using Backend.ServiceLogic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserServices userServices;

        public UserController(IUserServices _userServices)
        {
            userServices = _userServices;
        }

        [HttpGet]
        public async Task<IActionResult> GetSpecificUser(string username, string password)
        {
            try
            {
                var user = await userServices.GetSpecificUser(username, password);

                if (user == null)
                    return NotFound();

                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> getUserbyId(int userId)
        {
            try
            {
                var user = await userServices.getUserbyId(userId);

                if (user == null)
                    return NotFound();

                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddUsers([FromBody] Users user)
        {
            try
            {
                var users = await userServices.AddUsers(user);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpGet("{value}/{userId}/{lentId}")]
        public async Task<IActionResult> UpdateProduct(int userId, int lentId, string value)
        {
            try
            {
                var val = await userServices.UpdateProduct(userId, lentId, value);
                return Ok(val);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            try
            {
                var user = await userServices.DeleteUser(id);

                if (user == null)
                    return NotFound();

                return Ok(user);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }
    }
}
