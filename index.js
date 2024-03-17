*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
     width: 100%;
 height: 100vh;
 background-color: rgb(157, 211, 250);
 background-image: linear-gradient(to right, rgb(99, 255, 242) ,rgb(30, 120, 255));
}
.container{
    text-transform: capitalize;
 width: 100%;
 height: 100vh;
 text-align: center;
 display: flex;
 flex-direction: column;
 justify-content: start;
 align-items: center;
}
h1{
margin-top: 5%;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
color: #000000d8;

}
form input {
    margin-top: 5%;
    border-radius: 10px;
    border: none;
    outline: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.705);
    width: 50vw;
    padding: 10px;
    text-transform: capitalize;
}
.city-heading{
    margin-top: 5%;
    font-weight: 700;
    text-transform: capitalize;
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.24);
}
#weather{
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    width: 100%;
    align-items: center;
    justify-content: center;
}
.temperature-card{
    width: 300px;
    margin: 0;
    margin-top: 5%;
    padding: 2%;
    border-radius: 20px;
    background-color: #ffffff;
display: flex;
flex-direction: column;
font-weight: 500;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.692);
text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.24);
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.temperature-card h3{
    box-shadow: 5px 5px 10px rgba(28, 103, 136, 0.531);
    border-radius: 5px;
    font-weight: 550;
    color: rgb(55, 55, 55);
    margin-bottom:4%;
}
#weather #temp{
    margin-bottom: 5%;
    text-transform: uppercase;
}
#details {
display: flex;
justify-content: center;
align-items: center;
gap: 5%;
}
