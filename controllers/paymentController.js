const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  console.log("Payment Processed Successfully");

  res.status(200).json({
    success: true,
    client_secret: "test_client_secret_12345", // Mock client secret
  });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: "test_stripe_api_key" }); // Mock API key
});