const Project = (title) => {
  let projects = [];
  let project = document.createElement('div');
  project.classList.add('todo-item');
  project.classList.add('project');

  const p = document.createElement('p');
  p.textContent = title;
  project.appendChild(p);
  console.log(project);
  return { project };
};

export default Project;
