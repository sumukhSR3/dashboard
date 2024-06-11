import React, { useState, useEffect } from "react";


import ChartCard from "../components/Chart/ChartCard";
import { Bar, Line, } from "react-chartjs-2";

import PageTitle from "../components/Typography/PageTitle";


import response from "../utils/demo/tableData";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from "@windmill/react-ui";

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  barOptions,
  lineLegends,
} from "../utils/demo/chartsData";
import ChartCardsmall from "../components/Chart/ChartCardsmall";

function Dashboard() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // pagination change control
  function onPageChange(p) {
    setPage(p);
  }

  //progress line

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      {/* <CTA /> */}

      {/* <PageTitle>Charts</PageTitle> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <div className="grid gap-4">
          <ChartCardsmall title="Total Income">
            <div className="flex gap-4  w-1/2">
              <div className="grid">
                <h2 className="text-2xl font-bold dark:text-gray-400">
                  $124,563.00
                </h2>
              </div>
              <Badge type="success">
                <p className="text-center mt-2 dark:text-gray-400">+13.5%</p>
              </Badge>
            </div>

            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="bg-blue-600 h-2.5 rounded-full w-1/2 mt-4">.</div>
            </div>
          </ChartCardsmall>

          <ChartCard title="New Users">
            <div className="flex gap-6">
              <h2 className="text-2xl font-bold dark:text-gray-400">94.2%</h2>
              <Badge type="success">
                <p className="text-center mt-2 dark:text-gray-400">+6.9%</p>
              </Badge>
            </div>
            <Bar {...barOptions} />
          </ChartCard>
        </div>

        <ChartCard title="Balance">
          <div className="flex gap-40">
            <p className="text-gray-400 text-sm">Earnings</p>
            <p className="text-gray-400 text-sm">Sales Value</p>
          </div>
          <div className="cont flex gap-6 mb-8">
            <div className="flex gap-4 border-2 p-4 w-1/3">
              <div className="grid">
                <h2 className="text-2xl font-bold dark:text-gray-400">
                  43.41%
                </h2>
              </div>
              <Badge type="success">
                <p className="text-center mt-2 dark:text-gray-400">+2.5%</p>
              </Badge>
            </div>

            <div className="flex gap-4 border-2 p-4 w-1/2">
              <div className="grid">
                <h2 className="text-2xl font-bold dark:text-gray-400">
                  $95,422
                </h2>
              </div>
              <Badge type="success">
                <p className="text-center mt-2 dark:text-gray-400">+13.5%</p>
              </Badge>
            </div>
          </div>
          <Line {...lineOptions} />
        </ChartCard>
      </div>

      <TableContainer>
        <div className="flex justify-between px-10">
          <h1 className="text-xl font-bold py-4">Recent Transactions</h1>
          <button
            type="button"
            class="mt-4 focus:outline-none h-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Export
          </button>
        </div>

        <Table>
          <TableHeader>
            <tr>
              <TableCell>Invoice ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Description</TableCell>
            </tr>
          </TableHeader>

          <TableBody>
            {data.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div class="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        MD63592DR2
                      </label>
                    </div>
                  </div>
                </TableCell>
                
                <TableCell>
                  <span className="text-sm">
                    {new Date(user.date).toLocaleDateString()}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">code 5928MD01</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                <span className="text-sm">$ {user.amount}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
    </>
  );
}

export default Dashboard;
