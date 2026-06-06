function TaskCard({item}) {
    return (
        <div className="card mb-3 shadow-sm border-0">
            <div className="card-body d-flex justify-content-between align-items-center">

                <div>
                    <small className="text-secondary">Task</small>
                    <h5>{item.task}</h5>
                </div>

                <div>
                    <small>Priority</small>
                    <div>{item.priority}</div>
                </div>

                <span className="badge text-bg-secondary">
                    {item.status}
                </span>

            </div>
        </div>
    )
}

export default TaskCard