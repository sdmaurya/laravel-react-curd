jQuery(document).ready(function($) {

jQuery("#frm").submit(function(e){

    e.preventDefault();
    jQuery.ajax({
        url:"{{url('/form_submit')}}",
        data: jQuery("#frm").serialize(),
        type:'post',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success:function(result){
          alert(result)
            // if(result.msg){
            //   jQuery("#msg").html(result.msg);
            // }else{
            //   jQuery("#msg").html(result.err);
            // } 

          }
          });
});
});