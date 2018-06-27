import * as React from "react";

import * as styles from "./Table.module.scss";

export interface ITableProps extends React.Props<Table> {
  table: {
    records: any[][];
    columns: string[];
  };
}

export class Table extends React.Component<ITableProps> {
  render() {
    const tableJS = this.props.table;
    let { columns = [] } = tableJS;
    const { records = [] } = tableJS;

    if (columns.length == 0) {
      columns = ["Loading..."];
    }

    return (
      <div
        style={{ width: "100%", height: "100%", overflow: "auto" }}
        className={`${styles.table}`}
      >
        <table className="table table-condensed table-bordered table-hover table-striped">
          <thead>
            <tr>{columns.map((name, key) => <th key={key}>{name}</th>)}</tr>
          </thead>
          <tbody>
            {records.map((record, key) => (
              <tr key={key}>
                {record.map((item, k) => <td key={k}>{String(item)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
