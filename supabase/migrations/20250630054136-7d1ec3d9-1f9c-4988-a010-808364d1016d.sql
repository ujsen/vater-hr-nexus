
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Authenticated users can view employees" ON public.employees;
DROP POLICY IF EXISTS "Authenticated users can insert employees" ON public.employees;
DROP POLICY IF EXISTS "Authenticated users can update employees" ON public.employees;
DROP POLICY IF EXISTS "Authenticated users can view products" ON public.products;
DROP POLICY IF EXISTS "Authenticated users can insert products" ON public.products;
DROP POLICY IF EXISTS "Authenticated users can update products" ON public.products;
DROP POLICY IF EXISTS "Authenticated users can view categories" ON public.categories;
DROP POLICY IF EXISTS "Authenticated users can insert categories" ON public.categories;
DROP POLICY IF EXISTS "Authenticated users can view vendors" ON public.vendors;
DROP POLICY IF EXISTS "Authenticated users can insert vendors" ON public.vendors;
DROP POLICY IF EXISTS "Authenticated users can update vendors" ON public.vendors;
DROP POLICY IF EXISTS "Authenticated users can view sales" ON public.sales;
DROP POLICY IF EXISTS "Authenticated users can insert sales" ON public.sales;
DROP POLICY IF EXISTS "Authenticated users can view sale_items" ON public.sale_items;
DROP POLICY IF EXISTS "Authenticated users can insert sale_items" ON public.sale_items;
DROP POLICY IF EXISTS "Authenticated users can view purchase_orders" ON public.purchase_orders;
DROP POLICY IF EXISTS "Authenticated users can insert purchase_orders" ON public.purchase_orders;
DROP POLICY IF EXISTS "Authenticated users can update purchase_orders" ON public.purchase_orders;
DROP POLICY IF EXISTS "Authenticated users can view purchase_order_items" ON public.purchase_order_items;
DROP POLICY IF EXISTS "Authenticated users can insert purchase_order_items" ON public.purchase_order_items;
DROP POLICY IF EXISTS "Authenticated users can view projects" ON public.projects;
DROP POLICY IF EXISTS "Authenticated users can insert projects" ON public.projects;
DROP POLICY IF EXISTS "Authenticated users can update projects" ON public.projects;
DROP POLICY IF EXISTS "Authenticated users can view payroll" ON public.payroll;
DROP POLICY IF EXISTS "Authenticated users can insert payroll" ON public.payroll;
DROP POLICY IF EXISTS "Authenticated users can view accounting_transactions" ON public.accounting_transactions;
DROP POLICY IF EXISTS "Authenticated users can insert accounting_transactions" ON public.accounting_transactions;
DROP POLICY IF EXISTS "Authenticated users can view equipment" ON public.equipment;
DROP POLICY IF EXISTS "Authenticated users can insert equipment" ON public.equipment;
DROP POLICY IF EXISTS "Authenticated users can update equipment" ON public.equipment;
DROP POLICY IF EXISTS "Authenticated users can view work_orders" ON public.work_orders;
DROP POLICY IF EXISTS "Authenticated users can insert work_orders" ON public.work_orders;
DROP POLICY IF EXISTS "Authenticated users can update work_orders" ON public.work_orders;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.employees ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sales ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sale_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.purchase_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.purchase_order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payroll ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.accounting_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.equipment ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.work_orders ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
FOR UPDATE USING (auth.uid() = id);

-- Create policies for employees
CREATE POLICY "Authenticated users can view employees" ON public.employees
FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert employees" ON public.employees
FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update employees" ON public.employees
FOR UPDATE TO authenticated USING (true);

-- Create policies for products
CREATE POLICY "Authenticated users can view products" ON public.products
FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert products" ON public.products
FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update products" ON public.products
FOR UPDATE TO authenticated USING (true);

-- Create policies for categories
CREATE POLICY "Authenticated users can view categories" ON public.categories
FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert categories" ON public.categories
FOR INSERT TO authenticated WITH CHECK (true);

-- Create policies for vendors
CREATE POLICY "Authenticated users can view vendors" ON public.vendors
FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert vendors" ON public.vendors
FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update vendors" ON public.vendors
FOR UPDATE TO authenticated USING (true);

-- Create policies for sales
CREATE POLICY "Authenticated users can view sales" ON public.sales
FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert sales" ON public.sales
FOR INSERT TO authenticated WITH CHECK (true);

-- Create policies for sale_items
CREATE POLICY "Authenticated users can view sale_items" ON public.sale_items
FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert sale_items" ON public.sale_items
FOR INSERT TO authenticated WITH CHECK (true);

-- Create policies for purchase_orders
CREATE POLICY "Authenticated users can view purchase_orders" ON public.purchase_orders
FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert purchase_orders" ON public.purchase_orders
FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update purchase_orders" ON public.purchase_orders
FOR UPDATE TO authenticated USING (true);

-- Create policies for purchase_order_items
CREATE POLICY "Authenticated users can view purchase_order_items" ON public.purchase_order_items
FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert purchase_order_items" ON public.purchase_order_items
FOR INSERT TO authenticated WITH CHECK (true);

-- Create policies for projects
CREATE POLICY "Authenticated users can view projects" ON public.projects
FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert projects" ON public.projects
FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects" ON public.projects
FOR UPDATE TO authenticated USING (true);

-- Create policies for payroll
CREATE POLICY "Authenticated users can view payroll" ON public.payroll
FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert payroll" ON public.payroll
FOR INSERT TO authenticated WITH CHECK (true);

-- Create policies for accounting_transactions
CREATE POLICY "Authenticated users can view accounting_transactions" ON public.accounting_transactions
FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert accounting_transactions" ON public.accounting_transactions
FOR INSERT TO authenticated WITH CHECK (true);

-- Create policies for equipment
CREATE POLICY "Authenticated users can view equipment" ON public.equipment
FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert equipment" ON public.equipment
FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update equipment" ON public.equipment
FOR UPDATE TO authenticated USING (true);

-- Create policies for work_orders
CREATE POLICY "Authenticated users can view work_orders" ON public.work_orders
FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert work_orders" ON public.work_orders
FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Authenticated users can update work_orders" ON public.work_orders
FOR UPDATE TO authenticated USING (true);
