<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function posts() {
        return Post::with('user')->orderBy('id', 'desc')->paginate(5);
    }

    public function create(Request $request) {
        $request->validate([
            'title' => 'required'
        ]);

        Post::create([
            'title' => $request->title,
            'user_id' => auth()->user()->id
        ]);

        return response(['message' => 'Post Created Successfully']);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'title' => 'required'
        ]);

        Post::find($id)->update([
            'title' => $request->title,
            'user_id' => auth()->user()->id
        ]);

        return response(['message' => 'Post Updated Successfully']);
    }

    public function delete($id) {
        Post::find($id)->delete();
        return response(['message' => 'Post Deleted Successfully']);
    }
}
