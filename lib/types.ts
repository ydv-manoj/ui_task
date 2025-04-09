// app/lib/types.ts

// Dashboard data types
export interface SalesMetricsData {
    currentMonth: {
      value: number;
      growth: number;
      comparisonValue: number;
      chartData: number[];
    };
    lastMonth: {
      chartData: number[];
    };
    labels: string[];
  }
  
  export interface CityData {
    name: string;
    value: number;
    percentage: number;
    growth: number;
    isPositiveGrowth: boolean;
    color: string;
  }
  
  export interface TopCitiesData {
    total: number;
    growth: number;
    cities: CityData[];
  }
  
  export interface SkuData {
    id: number;
    name: string;
    sales: string;
    outOfStock: string;
    totalInventory: string;
    avgRank: string;
    estTraffic: string;
    estImpressions: string;
    ci: string;
    selected: boolean;
    growth?: {
      percentage: string;
      isPositive: boolean;
    };
  }
  
  export interface TableTotals {
    sales: string;
    outOfStock: string;
    totalInventory: string;
    avgRank: string;
    estTraffic: string;
    estImpressions: string;
    ci: string;
  }
  
  // UI Component Types
  export interface LineChartProps {
    data: {
      labels: string[];
      currentMonth: number[];
      lastMonth: number[];
    };
    currentColor: string;
    previousColor: string;
  }
  
  export interface GaugeChartProps {
    total: number;
    percentage: number;
    segments: {
      value: number;
      percentage: number;
      color: string;
    }[];
  }
  
  export interface Column {
    header: string;
    accessor: string;
    sortable?: boolean;
    width?: string;
    isCurrency?: boolean;
    isPercentage?: boolean;
  }
  
  export interface DataTableProps {
    columns: Column[];
    data: SkuData[];
    totals: TableTotals;
    sectionLabel?: string;
    sectionEndLabel?: string;
  }
  
  export interface MetricCardProps {
    title: string;
    value: string | number;
    growth?: {
      value: string;
      isPositive: boolean;
    };
    comparisonText?: string;
    icon?: React.ReactNode;
  }
  
  // Platform types
  export type Platform = 'Blinkit' | 'Zepto' | 'Instamart';
  
  export interface PlatformInfo {
    name: Platform;
    color: string;
    isActive: boolean;
  }
  
  // Layout types
  export interface MenuItem {
    icon: React.ReactNode;
    label: string;
    isActive?: boolean;
    hasSubmenu?: boolean;
    expanded?: boolean;
    submenuItems?: { label: string; isActive?: boolean }[];
  }