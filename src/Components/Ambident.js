import { useState } from 'react';

const Panel = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  const togglePanel = () => {
    setIsActive(prevIsActive => !prevIsActive);
  };

  return (
    <section className="panel">
      <h3 onClick={togglePanel} style={{ cursor: 'pointer' }}>
        {title} {isActive ? "⬆️" : "🔻"}
      </h3>
      {isActive ?<p>{children}</p> : null}
    </section>
  );
};

const Ambident = () => {
  return (
    <div className="container">
      <h2>Accordion example</h2>
      <Panel title="Tab 1">
        Data for first tab
      </Panel>
      <Panel title="Tab 2">
        Data for second tab
      </Panel>
    </div>
  );
};

export default Ambident;
