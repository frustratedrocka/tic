<?php

// config
require("../includes/config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    if (empty($_POST["symbol"]))
    {
        apologize("Please provide a stock symbol.");
    }

    if ($stock = lookup($_POST["symbol"]) !== false);
    {
        // format price
        // number_format(float $stock["price"] [, int decimals = 4]);
    }
    // else
    // {
    //    apologize("Stock symbol not found.");
    // }
}

?>
