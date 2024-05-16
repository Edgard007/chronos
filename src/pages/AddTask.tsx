import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { butterup } from "butterup-toast";

// Components
import Input from "@components/Input";
import Select from "@components/Select";
import Button from "@components/Button";

interface Project {
  id: string;
  name: string;
}

interface Client extends Project {
  projects: Project[];
}

const info: Client[] = [
  {
    id: crypto.randomUUID().toString(),
    name: "BFA",
    projects: [
      {
        id: crypto.randomUUID().toString(),
        name: "BXI",
      },
      {
        id: crypto.randomUUID().toString(),
        name: "BMO",
      },
    ],
  },
  {
    id: crypto.randomUUID().toString(),
    name: "PH",
    projects: [
      {
        id: crypto.randomUUID().toString(),
        name: "Código postales",
      },
    ],
  },
];

const AddTask = () => {
  // Translations
  const { t } = useTranslation("", { keyPrefix: "add-task" });

  // States
  const [client, setClient] = useState("");
  const [project, setProject] = useState("");
  const [task, setTask] = useState("");

  // Data
  const [clients, _] = useState<Client[]>(info);
  const [projects, setProjects] = useState<Project[]>([]);

  const handleClient = (val: string) => {
    setProject("");
    const c = clients.find((c) => c.id === val);
    if (c) {
      setClient(c?.id);
      setProjects(c.projects);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!client || !project || !task) {
      butterup.toast({
        title: t("title") ?? "",
        message: t("error") ?? "",
        type: "error",
        location: "bottom-right",
      });
      return;
    }

    console.log({ client, project, task });
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Select
        label={t("client")}
        placeholder={t("client-placeholder") ?? ""}
        options={(clients || []).map((c) => ({ label: c?.name, value: c?.id }))}
        value={client}
        onChange={(val) => handleClient(val)}
        width="85%"
      />
      <Select
        label={t("project")}
        placeholder={t("project-placeholder") ?? ""}
        options={(projects || []).map((p) => ({
          label: p?.name,
          value: p?.id,
        }))}
        value={project}
        onChange={(val) => setProject(val)}
        width="85%"
      />
      <Input
        label={t("task")}
        type="textarea"
        onChange={(val) => setTask(val)}
        value={task}
        placeholder={t("task-placeholder") ?? ""}
        width="88%"
      />
      <Button text={t("btn")} type="submit" width="6rem" />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-top: 1rem;
`;

export default AddTask;
