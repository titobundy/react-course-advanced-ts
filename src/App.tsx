import { useState, useEffect, useCallback } from "react";

import {
  RenderProps1,
  RenderProps2,
  ControlProps,
  CompoundComponents,
  HighOrderComponent,
  CustomHooks,
  ContainerPresenter,
  ControlledComponent,
  UncontrolledComponent,
} from "./components";

function App() {
  const [sections, setSections] = useState([
    {
      title: "Render Props",
      description: "Render Props es un patrón que consiste en pasar una función a un componente hijo para que este la ejecute y retorne un JSX.",
      component: [<RenderProps1 key="1"/>, <RenderProps2 key="2"/>],
      active: false,
    },
    {
      title: "Control Props",
      description: "Control Props es un patrón que consiste en pasarle al componente un prop que le permita controlar su estado interno.",
      component: <ControlProps key="3"/>,
      active: false,
    },
    {
      title: "Compound Components",
      description: "Compound Components es un patrón que consiste en crear componentes que trabajan juntos para crear una funcionalidad más compleja.",
      component: <CompoundComponents key="4"/>,
      active: false,
    },
    {
      title: "Higher Order Components",
      description: "Higher Order Components es un patrón que consiste en crear un componente que recibe un componente y retorna un componente nuevo.",
      component: <HighOrderComponent key="5"/>,
      active: false,
    },
    {
      title: "Custom Hook",
      description: "Custom Hook es un patrón que consiste en crear una función que retorna un hook personalizado.",
      component: <CustomHooks key="6"/>,
      active: false,
    },
    {
      title: "Container-Present",
      description: "Container-Present es un patrón que consiste en separar la lógica de negocio de la presentación.",
      component: <ContainerPresenter key="7"/>,
      active: false,
    },
    {
      title: "Controlled Components",
      description: "Controlled Components es un patrón que consiste en pasarle al componente un prop que le permita controlar su estado interno.",
      component: <ControlledComponent key="8"/>,
      active: false,
    },
    {
      title: "Uncontrolled Components",
      description: "Uncontrolled Components es un patrón que consiste en no pasarle al componente un prop que le permita controlar su estado interno.",
      component: <UncontrolledComponent key="9"/>,
      active: false,
    },
  ]);

  const [currentSection, setCurrentSection] = useState(0);

  const activateNextSection = useCallback(() => {
    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    }
  }, [currentSection, sections.length]);

  useEffect(() => {
    setSections((prevSections) =>
      prevSections.map((section, index) => ({
        ...section,
        active: index <= currentSection,
      }))
    );
  }, [currentSection]);

  useEffect(() => {
    setCurrentSection(0);
  }, []);

  return (
    <>
      <header>
        <h1>🌱 Patrones de renderizado y composición en React 🌿</h1>
        <button onClick={activateNextSection}>Activar ejemplo del siguiente patrón</button>
      </header>
      <section className="Patterns">
        {sections.length === 0 ? (
          <p>No hay secciones disponibles.</p>
        ) : (
          sections.map((section, index) =>
            section.active ? (
              <section key={index}>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                {section.component}
              </section>
            ) : null
          )
        )}
      </section>
      <footer>
        <p>
          <span>Made with 💚 and 👩🏻‍💻</span>
          <span>by Teffcode and Platzi</span>
        </p>
      </footer>
    </>
  );
}

export default App;
