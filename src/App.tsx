import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { alerts, journeyMetrics, playbooks, segments, signalCards, trendPoints } from "./data";

const badgeClass = (state: string) => `signal-card__badge signal-card__badge--${state}`;
const severityClass = (severity: string) => `alert-card__pill alert-card__pill--${severity}`;

export default function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero__copy">
          <div className="eyebrow">Customer journey control plane</div>
          <h1>Map lifecycle pressure, conversion gaps, and intervention timing in one operating surface.</h1>
          <p>
            A recruiter-ready control plane for teams that need acquisition, activation, expansion, and retention
            decisions to live in one coordinated workflow instead of fragmented dashboards.
          </p>
          <div className="hero__chips">
            <span>Lifecycle</span>
            <span>Interventions</span>
            <span>Expansion</span>
            <span>Retention</span>
          </div>
        </div>

        <div className="hero__journey">
          {journeyMetrics.map((metric) => (
            <div key={metric.stage} className="hero__journey-card">
              <strong>{metric.stage}</strong>
              <span>{metric.accounts} accounts</span>
              <small>{metric.intervention}</small>
            </div>
          ))}
        </div>
      </header>

      <section className="signal-grid">
        {signalCards.map((card) => (
          <article key={card.label} className="signal-card">
            <div className="signal-card__header">
              <span>{card.label}</span>
              <span className={badgeClass(card.state)}>{card.state}</span>
            </div>
            <strong>{card.value}</strong>
            <p>{card.note}</p>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="panel panel--wide">
          <div className="eyebrow">Journey velocity</div>
          <h2>Teams need to see where lifecycle movement is accelerating and where intervention must happen now.</h2>
          <div className="chart-stack">
            <div className="chart-card">
              <h3>Engagement, activation, and retention trend</h3>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={trendPoints}>
                  <defs>
                    <linearGradient id="engagedFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6ee7b7" stopOpacity={0.45} />
                      <stop offset="95%" stopColor="#6ee7b7" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(148,163,184,0.14)" vertical={false} />
                  <XAxis dataKey="period" stroke="#7c8aa5" />
                  <YAxis stroke="#7c8aa5" />
                  <Tooltip />
                  <Area type="monotone" dataKey="engaged" stroke="#6ee7b7" fill="url(#engagedFill)" strokeWidth={3} />
                  <Area type="monotone" dataKey="activated" stroke="#60a5fa" fill="none" strokeWidth={3} />
                  <Area type="monotone" dataKey="retained" stroke="#f59e0b" fill="none" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <h3>Stage pressure and conversion</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={journeyMetrics}>
                  <CartesianGrid stroke="rgba(148,163,184,0.14)" vertical={false} />
                  <XAxis dataKey="stage" stroke="#7c8aa5" />
                  <YAxis stroke="#7c8aa5" />
                  <Tooltip />
                  <Bar dataKey="conversion" fill="#fb7185" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </article>

        <article className="panel">
          <div className="eyebrow">Segment view</div>
          <h2>Which journey cohorts are expanding cleanly and which ones are slipping.</h2>
          <div className="table-shell">
            <table>
              <thead>
                <tr>
                  <th>Segment</th>
                  <th>Source</th>
                  <th>Health</th>
                  <th>Expansion</th>
                  <th>Risk</th>
                </tr>
              </thead>
              <tbody>
                {segments.map((segment) => (
                  <tr key={segment.segment}>
                    <td>{segment.segment}</td>
                    <td>{segment.source}</td>
                    <td>{segment.health}</td>
                    <td>{segment.expansion}</td>
                    <td>{segment.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="panel">
          <div className="eyebrow">Intervention queue</div>
          <h2>Where lifecycle pressure deserves human action instead of another report.</h2>
          <div className="alert-list">
            {alerts.map((alert) => (
              <div key={alert.title} className="alert-card">
                <div className="alert-card__top">
                  <strong>{alert.title}</strong>
                  <span className={severityClass(alert.severity)}>{alert.severity}</span>
                </div>
                <p>{alert.reason}</p>
                <small>{alert.nextAction}</small>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid">
        <article className="panel">
          <div className="eyebrow">Playbook layer</div>
          <h2>Lifecycle systems work better when interventions have owners, windows, and explicit plays.</h2>
          <div className="playbook-list">
            {playbooks.map((playbook) => (
              <div key={playbook.title} className="playbook-card">
                <div className="playbook-card__top">
                  <strong>{playbook.title}</strong>
                  <span>{playbook.window}</span>
                </div>
                <p>{playbook.summary}</p>
                <small>{playbook.owner}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="eyebrow">Journey map</div>
          <h2>One view that ties acquisition, adoption, and renewal into one operator conversation.</h2>
          <div className="journey-map">
            {journeyMetrics.map((metric, index) => (
              <div key={metric.stage} className="journey-map__step">
                <div className="journey-map__node">
                  <strong>{metric.stage}</strong>
                  <span>{metric.conversion}% conversion</span>
                </div>
                {index < journeyMetrics.length - 1 ? <div className="journey-map__line" /> : null}
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
