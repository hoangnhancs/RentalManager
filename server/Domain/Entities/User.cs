using System;
using Microsoft.AspNetCore.Identity;

namespace Domain.Entities;

public class User : IdentityUser
{
    public string? DisplayName { get; set; }
    public bool isHost { get; set; } = false;
    public DateOnly? DateOfBirth { get; set; }
}
