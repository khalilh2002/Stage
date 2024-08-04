<?php

namespace App\Http\Controllers;

use response;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class StagiaireController extends Controller
{
    public function index ()  {
       $stagiaireRole = Role::where('name','stagiaire')->first();
       if(!$stagiaireRole){
        return response()->json(["message"=>"role does not existe"],404);
       }
       $users = $stagiaireRole->users()->get();
       return response()->json($users,200);
    }
}
