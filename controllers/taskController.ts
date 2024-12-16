import {Request, Response} from "express"

interface task {
    id: number,
    name: string,
    description: string,
    dueDate: string,
    status: string,
}

let tasks: task[] = [
    {
        id: 1,
        name: "Task 1",
        description: "anything",
        dueDate: "16-12-2024",
        status: "prnding"
    },
    {
        id: 2,
        name: "Task 2",
        description: "nothing",
        dueDate: "16-12-2024",
        status: "complete"
    }
]

//get all tasks
export const getAllTasks = (req : Request, res : Response) => {
    if(tasks.length === 0){
        res.status(400).json({
            isSuccess: false,
            message: "The task is not found"
        })

        return;
    }
    res.status(200).json({
        isSuccess: true,
        tasks
    })

}

//get single task
export const getSingleTask = (req : Request, res : Response) => {
    const taskId = req.params.id;

    const targetTask = tasks.find((t) => t.id === parseInt(taskId))

    if(!targetTask) {
        res.status(400).json({
            isSuccess: false,
            message: `The task with id:${taskId} is not found`
        })
        return
    }

    res.status(200).json({
        isSuccess: true,
        message: `The task with id:${taskId} is found`,
        tasks: targetTask
    })
    return
}
