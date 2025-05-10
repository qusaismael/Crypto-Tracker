/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** CoinMarketCap API Key - Your CoinMarketCap API key. Get yours at https://coinmarketcap.com/api/ */
  "coinmarketcapApiKey": string,
  /** Currency - The currency to display prices in */
  "vsCurrency": "usd" | "eur" | "gbp" | "jpy",
  /** Refresh Interval - How often to refresh prices (in minutes) */
  "refreshInterval": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `list-coins` command */
  export type ListCoins = ExtensionPreferences & {}
  /** Preferences accessible in the `btc` command */
  export type Btc = ExtensionPreferences & {}
  /** Preferences accessible in the `search-coin` command */
  export type SearchCoin = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `list-coins` command */
  export type ListCoins = {}
  /** Arguments passed to the `btc` command */
  export type Btc = {}
  /** Arguments passed to the `search-coin` command */
  export type SearchCoin = {}
}

