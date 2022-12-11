<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventCollection;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $header = "Get all data success!";
        $code = "400";
        $data = new EventCollection(Event::paginate(10));

        return Inertia::render('Calendar', [
            "Code" => $code,
            "Message" =>  $header,
            "data" => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $event = new Event();
        $event->title = $request->title;
        $event->date = $request->date;
        $event->description = $request->description;
        $event->image = 0;
        $event->is_popup = true;
        $event->save();

        return redirect('/calendar')->with('message', 'berhasil tambah baru');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //get data
        $events = Event::all();
        $data = $events->find($id);

        return Inertia::render('Edit', [
            'header' => 'Edit Data',
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit($id, Request $request)
    {
        Event::where('id', $id)->update(
            [
                'title' => $request->title,
                'description' => $request->description,
                'date' => $request->date
            ]
            );

        return redirect('/calendar')->with('message', 'Berhasil update');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        //
    }
}
