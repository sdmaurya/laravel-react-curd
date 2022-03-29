<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Validator;
class Employee extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function uploaddoc(Request $request)
    {

        $data = new User;
        $data->name = $request->input('name');
        $data->email = $request->input('email');
        $data->password = Hash::make($request->input('password'));
        $result = $data->save();
        if($result){  

            return ['Result'=>'Data saved successfully'];
            
        }else{

            return ['Result'=>'DUnable to saved data'];
        }

    }
    public function login(Request $request)
    {

        $data = User::where('email', $request->email)->first(); 
        if($data){ 

            if(!$data || !Hash::check($request->password, $data->password)) {           

  
                return ['error'=>'Wrong Password'];
            }else{                             
          
                return  $data;
            }
        }else{
   
            return ['error'=>'Wrong Email and Password'];
        }

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // $validated = $request->validate([
        //     'name' => 'required',
        //     'email' => 'required',
        //     'password' => 'required',
        // ]);
        // $validator = Validator::make($request->all(),[
        //     'name' => 'required',
        //     'email' => 'required',
        //     'password' => 'required'
        // ]);

       
        $data = new User;
        $data->name = $request->name;
        $data->email = $request->email;
        $data->password = Hash::make($request->password);
        $result = $data->save();
        if($result){  

            return ['Result'=>'Data saved successfully'];
            
        }else{

            return ['Result'=>'DUnable to saved data'];
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       return  User::where('id',$id)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id,Request $request)
    {

        // return $id;
    //   $request->input();
        // $data = User::find($id);
        // $data->name = $request->name;     
        // $data->email = $request->email;     
        // $result = $data->save();
        // if($result){    
        //     return ['Result'=>'Data updated successfully'];
        // }else{
        //     return ['Result'=>'DUnable to updated data'];
        // }
        // return ['Result'=>'Data updated successfully'];

        $data = User::find($id);
        $data->name = $request->input('name');     
        $data->email = $request->input('email');     
        $result = $data->save();
        if($result){    
            return ['Result'=>'Data updated successfully'];
        }else{
            return ['Result'=>'DUnable to updated data'];
        }


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result =  User::where('id',$id)->delete();
        if(  $result ){

            return ['Result'=>'Data Delete successfully'];
            
        }else{

            return ['Result'=>'Unable to delete data'];

    }
}

}