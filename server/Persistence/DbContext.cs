using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Domain.Entities;

namespace Persistence
{
    public class DbContext(DbContextOptions options) : IdentityDbContext<User>(options)
    {
        
    }
}