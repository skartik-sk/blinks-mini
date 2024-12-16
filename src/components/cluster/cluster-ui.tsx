<<<<<<< HEAD
"use client";

import { useConnection } from "@solana/wallet-adapter-react";
import { IconTrash } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { AppModal } from "../ui/ui-layout";
import { ClusterNetwork, useCluster } from "./cluster-data-access";
import { Connection } from "@solana/web3.js";

export function ExplorerLink({
  path,
  label,
  className,
}: {
  path: string;
  label: string;
  className?: string;
}) {
  const { getExplorerUrl } = useCluster();
=======
'use client'

import { useConnection } from '@solana/wallet-adapter-react'
import { IconTrash } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import { AppModal } from '../ui/ui-layout'
import { ClusterNetwork, useCluster } from './cluster-data-access'
import { Connection } from '@solana/web3.js'

export function ExplorerLink({ path, label, className }: { path: string; label: string; className?: string }) {
  const { getExplorerUrl } = useCluster()
>>>>>>> main
  return (
    <a
      href={getExplorerUrl(path)}
      target="_blank"
      rel="noopener noreferrer"
      className={className ? className : `link font-mono`}
    >
      {label}
    </a>
<<<<<<< HEAD
  );
}

export function ClusterChecker({ children }: { children: ReactNode }) {
  const { cluster } = useCluster();
  const { connection } = useConnection();

  const query = useQuery({
    queryKey: ["version", { cluster, endpoint: connection.rpcEndpoint }],
    queryFn: () => connection.getVersion(),
    retry: 1,
  });
  if (query.isLoading) {
    return null;
=======
  )
}

export function ClusterChecker({ children }: { children: ReactNode }) {
  const { cluster } = useCluster()
  const { connection } = useConnection()

  const query = useQuery({
    queryKey: ['version', { cluster, endpoint: connection.rpcEndpoint }],
    queryFn: () => connection.getVersion(),
    retry: 1,
  })
  if (query.isLoading) {
    return null
>>>>>>> main
  }
  if (query.isError || !query.data) {
    return (
      <div className="alert alert-warning text-warning-content/80 rounded-none flex justify-center">
        <span>
          Error connecting to cluster <strong>{cluster.name}</strong>
        </span>
<<<<<<< HEAD
        <button
          className="btn btn-xs btn-neutral"
          onClick={() => query.refetch()}
        >
          Refresh
        </button>
      </div>
    );
  }
  return children;
}

export function ClusterUiSelect() {
  const { clusters, setCluster, cluster } = useCluster();
=======
        <button className="btn btn-xs btn-neutral" onClick={() => query.refetch()}>
          Refresh
        </button>
      </div>
    )
  }
  return children
}

export function ClusterUiSelect() {
  const { clusters, setCluster, cluster } = useCluster()
>>>>>>> main
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-primary rounded-btn">
        {cluster.name}
      </label>
<<<<<<< HEAD
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
      >
        {clusters.map((item) => (
          <li key={item.name}>
            <button
              className={`btn btn-sm ${item.active ? "btn-primary" : "btn-ghost"}`}
=======
      <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
        {clusters.map((item) => (
          <li key={item.name}>
            <button
              className={`btn btn-sm ${item.active ? 'btn-primary' : 'btn-ghost'}`}
>>>>>>> main
              onClick={() => setCluster(item)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
<<<<<<< HEAD
  );
}

export function ClusterUiModal({
  hideModal,
  show,
}: {
  hideModal: () => void;
  show: boolean;
}) {
  const { addCluster } = useCluster();
  const [name, setName] = useState("");
  const [network, setNetwork] = useState<ClusterNetwork | undefined>();
  const [endpoint, setEndpoint] = useState("");

  return (
    <AppModal
      title={"Add Cluster"}
=======
  )
}

export function ClusterUiModal({ hideModal, show }: { hideModal: () => void; show: boolean }) {
  const { addCluster } = useCluster()
  const [name, setName] = useState('')
  const [network, setNetwork] = useState<ClusterNetwork | undefined>()
  const [endpoint, setEndpoint] = useState('')

  return (
    <AppModal
      title={'Add Cluster'}
>>>>>>> main
      hide={hideModal}
      show={show}
      submit={() => {
        try {
<<<<<<< HEAD
          new Connection(endpoint);
          if (name) {
            addCluster({ name, network, endpoint });
            hideModal();
          } else {
            console.log("Invalid cluster name");
          }
        } catch {
          console.log("Invalid cluster endpoint");
=======
          new Connection(endpoint)
          if (name) {
            addCluster({ name, network, endpoint })
            hideModal()
          } else {
            console.log('Invalid cluster name')
          }
        } catch {
          console.log('Invalid cluster endpoint')
>>>>>>> main
        }
      }}
      submitLabel="Save"
    >
      <input
        type="text"
        placeholder="Name"
        className="input input-bordered w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Endpoint"
        className="input input-bordered w-full"
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
      />
      <select
        className="select select-bordered w-full"
        value={network}
        onChange={(e) => setNetwork(e.target.value as ClusterNetwork)}
      >
        <option value={undefined}>Select a network</option>
        <option value={ClusterNetwork.Devnet}>Devnet</option>
        <option value={ClusterNetwork.Testnet}>Testnet</option>
        <option value={ClusterNetwork.Mainnet}>Mainnet</option>
      </select>
    </AppModal>
<<<<<<< HEAD
  );
}

export function ClusterUiTable() {
  const { clusters, setCluster, deleteCluster } = useCluster();
=======
  )
}

export function ClusterUiTable() {
  const { clusters, setCluster, deleteCluster } = useCluster()
>>>>>>> main
  return (
    <div className="overflow-x-auto">
      <table className="table border-4 border-separate border-base-300">
        <thead>
          <tr>
            <th>Name/ Network / Endpoint</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clusters.map((item) => (
<<<<<<< HEAD
            <tr key={item.name} className={item?.active ? "bg-base-200" : ""}>
=======
            <tr key={item.name} className={item?.active ? 'bg-base-200' : ''}>
>>>>>>> main
              <td className="space-y-2">
                <div className="whitespace-nowrap space-x-2">
                  <span className="text-xl">
                    {item?.active ? (
                      item.name
                    ) : (
<<<<<<< HEAD
                      <button
                        title="Select cluster"
                        className="link link-secondary"
                        onClick={() => setCluster(item)}
                      >
=======
                      <button title="Select cluster" className="link link-secondary" onClick={() => setCluster(item)}>
>>>>>>> main
                        {item.name}
                      </button>
                    )}
                  </span>
                </div>
<<<<<<< HEAD
                <span className="text-xs">
                  Network: {item.network ?? "custom"}
                </span>
                <div className="whitespace-nowrap text-gray-500 text-xs">
                  {item.endpoint}
                </div>
=======
                <span className="text-xs">Network: {item.network ?? 'custom'}</span>
                <div className="whitespace-nowrap text-gray-500 text-xs">{item.endpoint}</div>
>>>>>>> main
              </td>
              <td className="space-x-2 whitespace-nowrap text-center">
                <button
                  disabled={item?.active}
                  className="btn btn-xs btn-default btn-outline"
                  onClick={() => {
<<<<<<< HEAD
                    if (!window.confirm("Are you sure?")) return;
                    deleteCluster(item);
=======
                    if (!window.confirm('Are you sure?')) return
                    deleteCluster(item)
>>>>>>> main
                  }}
                >
                  <IconTrash size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> main
}
