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
        return response()->json([$token],200);
    }

    public function encadrement() {
        /**
         * @var User $user
         */
        $user = Role::findByName("encadrement","web")->users()->first();
        $token = $user->createToken("auth-token")->plainTextToken;

        return response()->json([$token],200);
    }

    public function stagiaire() {
        /**
         * @var User $user
         */
        $user = Role::findByName("stagiaire","web")->users()->first();
        $token = $user->createToken("auth-token")->plainTextToken;
        return response()->json([$token],200);
    }

}
