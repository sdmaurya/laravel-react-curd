
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script src="/script.js"></script>
</head>
<body>
    <div id="msg" ></div>
    <form id="frm"  method="post">
        @csrf
        <input type="text" placeholder="name" name="name"><br>
        <input type="text" placeholder="email" name="email"><br>
        <input type="text" placeholder="password" name="password"><br>
        {{-- <input type="text" placeholder="contact" name="contact"><br>
        <input type="text" placeholder="address" name="address"><br> --}}
        <input type="submit" name="submit" id="frm-submit">
    </form>
   

</body>
</html>

