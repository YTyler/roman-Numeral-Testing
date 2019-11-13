import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import * as roman from './roman.js';


$(document).ready(function(){
  $('#romanForm').submit(function(event){
    event.preventDefault();
    var input = $('#romanInput').val();
    $('#output').text(input +' as a Roman Numeral is ' + roman.romanSplit(input));
  });
});
