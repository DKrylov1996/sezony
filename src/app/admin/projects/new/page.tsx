import ProjectForm from '../ProjectForm';
import { saveProjectAction } from '../actions';

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl text-mint-500">Новый проект</h1>
      <ProjectForm action={saveProjectAction} />
    </div>
  );
}
