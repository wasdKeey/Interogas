using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sabio.Models.Requests
{
    public class EmailSendRequest
    {
        [Required]
        [MinLength(2), MaxLength(100)]
        public string Name { get; set; }

        [Required(ErrorMessage = "Email address is required.")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "Not a valid email address.")]
        public string Email { get; set; }

        [Required]
        [MinLength(2), MaxLength(100)]
        public string Subject { get; set; }

        [Required]
        [MinLength(2), MaxLength(500)]
        public string Content { get; set; }
    }
}
