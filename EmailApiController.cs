        [AllowAnonymous]
        [HttpPost("contactus")]
        public ActionResult<SuccessResponse> ContactEmail(EmailSendRequest model)
        {
                int code = 202;
                BaseResponse response = null;

                try
                {
                    _service.ContactEmail(model);
                    _service.SendContactConfirmationEmail(model);

                    response = new SuccessResponse();
                }
                catch (Exception ex)
                {
                    code = 500;
                    response = new ErrorResponse(ex.Message);
                }

                return StatusCode(code, response);
            }
        }
    }
}
