const ContactUs = () => {
    const navigate = useNavigate();

    const [formData] = useState({ Name: '', Email: '', Subject: '', Content: '' });

    const handleSubmit = (values) => {
        _logger('handleSubmit', JSON.stringify(values, null, 2));
        emailsService(values).then(onContactSuccess).catch(onContactError);
    };

    const onContactSuccess = (response) => {
        _logger({ response }, 'Message Sent');
        toastr.success('We will get back to you shortly.', 'Message Sent!', { timeOut: 5000 });
        let path = `/`;
        navigate(path);
    };

    const onContactError = (response) => {
        _logger({ response }, 'Message did not Send');
    };

    const contactUsPage = (
        <>
            <div className="content">
                <div className="container">
                    <div className="row mt-5 ">
                        <h1 className="page-title text-secondary">Contact Us</h1>
                        <div className="col-md-6">
                            <div className="card shadow-lg">
                                <div>
                                    <div className="container">
                                        <Formik
                                            enableReinitialize={true}
                                            validationSchema={contactValidationSchema}
                                            initialValues={formData}
                                            onSubmit={handleSubmit}>
                                            <Form className="pb-4 pt-3">
                                                <Row className="form-group justify-content-center mb-3">
                                                    <Field
                                                        className="form-control mt-2 bg-light"
                                                        type="text"
                                                        name="Name"
                                                        id="Name"
                                                        placeholder="Name"
                                                    />
                                                    <ErrorMessage className="text-danger" name="Name" component="div" />
                                                </Row>

                                                <Row className="form-group justify-content-center mb-3">
                                                    <Field
                                                        className="form-control bg-light"
                                                        type="text"
                                                        name="Email"
                                                        id="Email"
                                                        placeholder="E-Mail"
                                                    />
                                                    <ErrorMessage
                                                        className="text-danger"
                                                        name="Email"
                                                        component="div"
                                                    />
                                                </Row>

                                                <Row className="form-group justify-content-center mb-2">
                                                    <Field
                                                        className="form-control mb-2 bg-light"
                                                        type="text"
                                                        name="Subject"
                                                        id="Subject"
                                                        placeholder="Subject"
                                                    />
                                                    <ErrorMessage
                                                        className="text-danger"
                                                        name="Subject"
                                                        component="div"
                                                    />
                                                </Row>

                                                <Row className="form-group justify-content-center">
                                                    <Field
                                                        className="form-control"
                                                        component="textarea"
                                                        name="Content"
                                                        id="Content"
                                                        placeholder="Message"
                                                        style={{ height: '277px' }}
                                                    />
                                                    <ErrorMessage
                                                        className="text-danger"
                                                        name="Content"
                                                        component="div"
                                                    />
                                                </Row>

                                                <Row className="form-group">
                                                    <Col className="mt-3" sm={3}>
                                                        <Button className="btn btn-primary mb-3" type="submit">
                                                            Submit
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card img-fluid">
                                <div className="shadow-lg">
                                    <ContactComp></ContactComp>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return <>{contactUsPage}</>;
};

export default ContactUs;
