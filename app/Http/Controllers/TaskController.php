<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    /**
     * Return all Tasks that belong to logged in user
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userId = auth()->user()->id;
        return Task::where('user_id', $userId)->get();
    }

    /**
     * Store a newly created Task in storage.
     *
     * @param StoreTaskRequest $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function store(StoreTaskRequest $request)
    {
        // Get request payload
        $data = $request->all();

        // Create new Task
        $task = new Task();
        $task->content = $data['content'];
        $task->priority = $data['priority'];
        $task->done = $data['done'];
        $task->user_id = auth()->user()->id;
        $task->save();

        return response($task, 201);
    }

    /**
     * Return single task with given id
     *
     * @param $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function show($id)
    {
        $userId = auth()->user()->id;
        return Task::where('user_id', $userId)
            ->findOrFail($id);
    }

    /**
     * Update the specified Task in storage.
     *
     * @param Request $request
     * @param $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function update(UpdateTaskRequest $request, $id)
    {
        // Get request payload
        $data = $request->all();

        $userId = auth()->user()->id;
        $task = Task::where('user_id', $userId)
            ->findOrFail($id);

        // Update Task
        $task->content = $data['content'];
        $task->priority = $data['priority'];
        $task->done = $data['done'];
        $task->save();

        return response($task, 201);
    }

    /**
     * Remove the specified Task from storage.
     *
     * @param $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function destroy($id)
    {
        $userId = auth()->user()->id;
        $task = Task::where('user_id', $userId)
            ->findOrFail($id);

        $task->delete();
        return response('', 200);
    }
}
