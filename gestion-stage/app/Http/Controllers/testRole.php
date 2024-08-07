<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Permission;

class testRole extends Controller
{
    public function admin() {
        /**
         * @var User $user
         */
        $user = Role::findByName("super-admin","web")->users()->first();
        $token = $user->createToken("auth-token")->plainTextToken;

        return response()->json([$user , $token],200);
    }

    public function encadrement() {
        $user = Role::findByName("encadrement","web")->users()->first();
        return response()->json($user,200);
    }

    public function stagiaire() {
        $user = Role::findByName("stagiaire","web")->users()->first();
        $cookie = cookie('auth', $user->createToken("auth-token")->plainTextToken, 60000);
        return response(json_encode($user->createToken("auth-token")->plainTextToken),200)->cookie($cookie);
    }

}
