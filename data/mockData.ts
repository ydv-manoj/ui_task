// app/data/mockData.ts
import { 
    SalesMetricsData, 
    TopCitiesData, 
    SkuData, 
    TableTotals,
    PlatformInfo 
  } from '../lib/types';
  
  // Platform data
  export const platformData: PlatformInfo[] = [
    { name: 'Blinkit', color: '#f8cb46', isActive: true },
    { name: 'Zepto', color: '#6c4fed', isActive: false },
    { name: 'Instamart', color: '#e25d33', isActive: false },
  ];
  
  // Sales metrics data
  export const salesMetricsData: SalesMetricsData = {
    currentMonth: {
      value: 125.49,
      growth: 2.4,
      comparisonValue: 119.69,
      chartData: [1.5, 2.8, 3.2, 2.6, 3.5, 2.5, 4.5]
    },
    lastMonth: {
      chartData: [1.2, 2.5, 2.8, 3.1, 2.3, 2.7, 3.8]
    },
    labels: ['09', '10', '11', '12', '13', '14', '15']
  };
  
  // Top cities data
  export const topCitiesData: TopCitiesData = {
    total: 68.2,
    growth: 2.2,
    cities: [
      { name: 'New Delhi', value: 26.5, percentage: 35, growth: 1.2, isPositiveGrowth: true, color: '#6c4fed' },
      { name: 'Mumbai', value: 36.4, percentage: 23, growth: 3.3, isPositiveGrowth: true, color: '#ea6153' },
      { name: 'West Bengal', value: 12.2, percentage: 21, growth: 2.3, isPositiveGrowth: true, color: '#f7c245' },
      { name: 'Others', value: 24.3, percentage: 9, growth: 1.09, isPositiveGrowth: true, color: '#d9d9d9' }
    ]
  };
  
  // SKU table data
  export const skuTableData: SkuData[] = [
    { 
      id: 1, 
      selected: true,
      name: 'Protein Bar 100g', 
      sales: '₹93,132.12', 
      outOfStock: '1.68%', 
      totalInventory: '931.9', 
      avgRank: '3.2', 
      estTraffic: '12,303', 
      estImpressions: '25,005', 
      ci: '1.5'
    },
    { 
      id: 2, 
      selected: true,
      name: 'Choco Bar 100g', 
      sales: '₹8,526.32', 
      outOfStock: '6.79%', 
      totalInventory: '679', 
      avgRank: '7', 
      estTraffic: '3005', 
      estImpressions: '4231', 
      ci: '2',
      growth: {
        percentage: '2.4%',
        isPositive: true
      }
    },
    { 
      id: 3, 
      selected: false,
      name: 'SKU 3', 
      sales: '₹9313', 
      outOfStock: '1.68%', 
      totalInventory: '931.9', 
      avgRank: '11', 
      estTraffic: '1931.9', 
      estImpressions: '₹931.9', 
      ci: '1.5'
    },
    { 
      id: 4, 
      selected: false,
      name: 'SKU 4', 
      sales: '₹0', 
      outOfStock: '0', 
      totalInventory: '0', 
      avgRank: '0', 
      estTraffic: '₹0', 
      estImpressions: '₹0', 
      ci: '0.0'
    }
  ];
  
  // City table data
  export const cityTableData: SkuData[] = [
    { 
      id: 1, 
      selected: true,
      name: 'Delhi', 
      sales: '₹93,132.12', 
      outOfStock: '1.68%', 
      totalInventory: '931.9', 
      avgRank: '3.2', 
      estTraffic: '12,303', 
      estImpressions: '25,005', 
      ci: '1.5'
    },
    { 
      id: 2, 
      selected: true,
      name: 'Bengaluru', 
      sales: '₹8,526.32', 
      outOfStock: '6.79%', 
      totalInventory: '679', 
      avgRank: '7', 
      estTraffic: '3005', 
      estImpressions: '4231', 
      ci: '2',
      growth: {
        percentage: '2.4%',
        isPositive: true
      }
    },
    { 
      id: 3, 
      selected: false,
      name: 'SKU 3', 
      sales: '₹9313', 
      outOfStock: '1.68%', 
      totalInventory: '931.9', 
      avgRank: '11', 
      estTraffic: '1931.9', 
      estImpressions: '₹931.9', 
      ci: '1.5'
    },
    { 
      id: 4, 
      selected: false,
      name: 'SKU 4', 
      sales: '₹0', 
      outOfStock: '0', 
      totalInventory: '0', 
      avgRank: '0', 
      estTraffic: '₹0', 
      estImpressions: '₹0', 
      ci: '0.0'
    }
  ];
  
  // Table totals
  export const tableTotals: TableTotals = {
    sales: '₹2,93,132.12',
    outOfStock: '16%',
    totalInventory: '2931',
    avgRank: '8.3',
    estTraffic: '61,985',
    estImpressions: '2,61,768',
    ci: '1.6'
  };