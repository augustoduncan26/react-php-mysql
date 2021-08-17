<?php include 'php/header.php';?>
<body>
  <div class="container">
  <!-- Title Document -->
  <div class="row mt-4">
    <div class="col-md-12"><h1>Customers List</h1></div>
  </div>
  <div class="row p-3"></div>
  <!-- Top -->
  <div class="row mb-3">
    <div class="col-md-8">
      <input type="text" id="search-customer" class="form-control col-md-10" placeholder="Search customer" />
    </div>
    <div class="col-md-2">
      <button class="btn btn-secondary add-customer form-control flo-right">Add Customer</button>
    </div>
    <div class="col-md-2">
      <button class="btn btn-secondary add-user form-control flo-right">Add User</button>
    </div>
  </div>
  <!-- Add Customer Form -->
  <div id="addCustomer" class="row">
    <div id="addRow" class="col-md-12"></div>
    <script type="text/babel" src="components/AddCustomers.js"></script>
  </div>
  <!-- Customer List Table -->
  <div id="root" class="customers"></div>

  </div>
</body>
<?php include "php/footer.php";?>
<script type="text/javascript" src="assets/App.js"></script>
</html>
