/* global $ */
import './graphql/articles';
import './graphql/login';

//Nav-toggle

$(document).ready(function(){
    $("#nav-toggle").click(function(){
        $("#topnav").slideToggle(500);
        $(".hamburger").toggleClass(" cross");
    });
}); 