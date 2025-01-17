import { useGetTasksQuery } from "@/state/api";


type BoardProps = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
  };
  
  const taskStatus = ["To Do", "Work In Progress", "Under Review", "Completed"];

  const BoardView = ({ id, setIsModalNewTaskOpen }: BoardProps) => {
    const {
      data: tasks,
      isLoading,
      error,
    } = useGetTasksQuery({ projectId: Number(id) });
  
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred while fetching tasks</div>;
  
    return (
      <div>
        Board View
      </div>
    );
  };

  export default BoardView;