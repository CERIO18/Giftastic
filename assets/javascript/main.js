    < script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" > < /script> <
        script type = "text/javascript" >
        $(".gif").on("click", function () {

            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        }); <
    /script>