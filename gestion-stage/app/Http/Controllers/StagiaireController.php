<?php

namespace App\Http\Controllers;

use response;
use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Permission;


class StagiaireController extends Controller
{
    public function index ()  {
       $stagiaireRole = Role::where('name','stagiaire')->first();
       if(!$stagiaireRole){
        return response()->json(["message"=>"role does not exists"],404);
       }
       $users = $stagiaireRole->users()->get();
       return response()->json($users,200);
    }

    public function remove(User $user) {
        /**
         * @var User = $boss
         */
        $boss = Auth::user();
        if($boss->hasPermissionTo("delete stagiaire","web")){
            $user->delete();
            $user->save();
            return response()->json(["message"=> "you are deleted the stagiaire successfully"],204);

        }else if(Auth::user()->id == $user->id){
            return response()->json(["message"=> "you are  the same"],300);

            /**
             * you can add the logic to delete the user by himself
             * AKA delete my Account Option
             */
        }
        return response()->json(["message"=> "you are not the authorized"],401);

    }

}
