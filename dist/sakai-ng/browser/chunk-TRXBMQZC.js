import {
  AssetService,
  AssetsComponent,
  Documentation,
  MaintenanceService,
  RequestmaintenanceComponent,
  UserService
} from "./chunk-CWJAQO2V.js";
import {
  AuthService,
  UserContextService,
  environment,
  require_sweetalert2_all
} from "./chunk-LOT77FXS.js";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsModule
} from "./chunk-SKDPBP2Y.js";
import {
  Card,
  CardModule,
  DatePicker,
  DatePickerModule,
  Dialog,
  DialogModule,
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  InputNumber,
  InputNumberModule,
  Message,
  MessageModule,
  Select,
  SelectModule,
  SortIcon,
  SortableColumn,
  Table,
  TableCheckbox,
  TableHeaderCheckbox,
  TableModule,
  Tag,
  TagModule,
  TextareaModule,
  Toast,
  ToastModule,
  Toolbar,
  ToolbarModule,
  Tooltip,
  TooltipModule
} from "./chunk-CUAEBAUY.js";
import {
  ActivatedRoute,
  BaseComponent,
  BaseStyle,
  Bind,
  Button,
  ButtonModule,
  CommonModule,
  DatePipe,
  DecimalPipe,
  DefaultValueAccessor,
  FormsModule,
  HttpClient,
  InputText,
  InputTextModule,
  MessageService,
  NgClass,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  PARENT_INSTANCE,
  PrimeTemplate,
  RippleModule,
  Router,
  RouterModule,
  SelectControlValueAccessor,
  SharedModule,
  ɵNgSelectMultipleOption
} from "./chunk-GEUHW3PL.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  ViewChild,
  ViewEncapsulation,
  __spreadValues,
  __toESM,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-JLR2E2AY.js";

// src/app/pages/users/users.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["dt"];
var _c1 = () => [10, 20, 30];
var _c2 = () => ({ "min-width": "70rem" });
function UsersComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "p-button", 9);
    \u0275\u0275listener("onClick", function UsersComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewUserDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 10);
    \u0275\u0275listener("onClick", function UsersComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelectedUsers());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedUsers.length);
  }
}
function UsersComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "p-button", 11);
    \u0275\u0275listener("onClick", function UsersComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 12);
    \u0275\u0275elementStart(4, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function UsersComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterUsers());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function UsersComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 14);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 15);
    \u0275\u0275text(4, "ID ");
    \u0275\u0275element(5, "p-sortIcon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 17);
    \u0275\u0275text(7, "Name ");
    \u0275\u0275element(8, "p-sortIcon", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 19);
    \u0275\u0275text(10, "Campus ");
    \u0275\u0275element(11, "p-sortIcon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 21);
    \u0275\u0275text(13, "Role ");
    \u0275\u0275element(14, "p-sortIcon", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 23);
    \u0275\u0275text(16, "Status ");
    \u0275\u0275element(17, "p-sortIcon", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 25);
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 14);
    \u0275\u0275element(2, "p-tableCheckbox", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "p-tag", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "div", 28)(15, "p-button", 29);
    \u0275\u0275listener("onClick", function UsersComponent_ng_template_9_Template_p_button_onClick_15_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewUser(user_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p-button", 30);
    \u0275\u0275listener("onClick", function UsersComponent_ng_template_9_Template_p_button_onClick_16_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editUser(user_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p-button", 31);
    \u0275\u0275listener("onClick", function UsersComponent_ng_template_9_Template_p_button_onClick_17_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteUser(user_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", user_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.userId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", user_r6.firstName, " ", user_r6.middleName || "", " ", user_r6.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((user_r6.campus == null ? null : user_r6.campus.campusName) || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", user_r6.isActive ? "Active" : "Inactive")("severity", user_r6.isActive ? "success" : "danger");
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function UsersComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2, "No users found");
    \u0275\u0275elementEnd()();
  }
}
var UsersComponent = class _UsersComponent {
  userService;
  messageService;
  userContextService;
  table;
  users = [];
  filteredUsers = [];
  selectedUsers = [];
  searchValue = "";
  loading = false;
  currentUserRole = "";
  campuses = [];
  departments = [];
  constructor(userService, messageService, userContextService) {
    this.userService = userService;
    this.messageService = messageService;
    this.userContextService = userContextService;
  }
  ngOnInit() {
    console.log("UsersComponent initialized");
    this.loadUsers();
    this.loadCurrentUserRole();
    this.loadCampuses();
    this.loadDepartments();
  }
  loadDepartments() {
    console.log("Loading departments...");
    this.userService.getDepartments().subscribe({
      next: (response) => {
        console.log("API Department Response:", response);
        console.table(response);
        this.departments = Array.isArray(response) ? response : response.data || [];
        console.log("Departments set:", this.departments);
      },
      error: (error) => {
        console.error("Error loading departments:", error);
      }
    });
  }
  loadCampuses() {
    console.log("Loading campuses...");
    this.userService.getCampuses().subscribe({
      next: (response) => {
        console.log("Campuses loaded:", response);
        this.campuses = Array.isArray(response) ? response : response.data || [];
        console.log("Campuses set:", this.campuses);
      },
      error: (error) => {
        console.error("Error loading campuses:", error);
      }
    });
  }
  loadCurrentUserRole() {
    const userId = this.userContextService.getUserId();
    console.log("Loading current user role, userId:", userId);
    if (userId) {
      this.userService.getUserById(userId).subscribe({
        next: (user) => {
          this.currentUserRole = user.role || "";
          console.log("Current user role:", this.currentUserRole);
        },
        error: (error) => {
          console.error("Error loading current user:", error);
        }
      });
    }
  }
  loadUsers() {
    console.log("Loading users...");
    this.loading = true;
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        console.log("Users loaded:", response);
        this.users = Array.isArray(response) ? response : response.data || [];
        this.filteredUsers = [...this.users];
        this.loading = false;
        console.log("Users set:", this.users);
      },
      error: (error) => {
        console.error("Error loading users:", error);
        import_sweetalert2.default.fire({
          title: "Error",
          text: "Failed to load users: " + (error.error?.message || error.message),
          icon: "error"
        });
        this.loading = false;
      }
    });
  }
  filterUsers() {
    if (!this.searchValue.trim()) {
      this.filteredUsers = [...this.users];
      return;
    }
    const search = this.searchValue.toLowerCase();
    this.filteredUsers = this.users.filter((user) => String(user.userId || "").toLowerCase().includes(search) || String(user.firstName || "").toLowerCase().includes(search) || String(user.lastName || "").toLowerCase().includes(search) || String(user.middleName || "").toLowerCase().includes(search) || String(user.campus?.campusName || "").toLowerCase().includes(search) || String(user.role || "").toLowerCase().includes(search));
  }
  onSelectionChange(event) {
    console.log("Selection changed:", event);
    console.log("Selected users:", this.selectedUsers);
    if (this.selectedUsers && this.selectedUsers.length > 0) {
      console.log("Selected user IDs:", this.selectedUsers.map((u) => u.userId || u.user_id));
    }
  }
  viewUser(user) {
    const createdDate = new Date(user.userCreated).toLocaleDateString();
    import_sweetalert2.default.fire({
      title: user.firstName + " " + (user.middleName || "") + " " + user.lastName,
      html: `
                <div style="text-align: left;">
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Contact Number:</strong> ${user.contactNumber || "N/A"}</p>
                    <p><strong>Role:</strong> ${user.role || "N/A"}</p>
                    <p><strong>Active:</strong> <span style="color: ${user.isActive ? "green" : "red"}">${user.isActive ? "Yes" : "No"}</span></p>
                    <p><strong>Created:</strong> ${createdDate}</p>
                </div>
            `,
      icon: "info",
      confirmButtonText: "Close"
    });
  }
  editUser(user) {
    const editData = {
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      email: user.email,
      contactNumber: user.contactNumber,
      role: user.role,
      isActive: user.isActive
    };
    import_sweetalert2.default.fire({
      title: "",
      titleText: "",
      html: `
                <div style="text-align: left; width: 100%; max-width: 700px; margin: 4 auto;">
                    <div style="background: #f5f5f5; color: #333; padding: 16px; margin: -16px -16px 16px -16px; border-radius: 8px 8px 0 0;">
                        <h2 style="margin: 0; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">\u270E Edit User</h2>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">First Name</label>
                            <input id="firstName" type="text" value="${editData.firstName || ""}" placeholder="First" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; transition: border-color 0.2s;" onmouseover="this.style.borderBottomColor='#667eea'" onmouseout="this.style.borderBottomColor='#e0e0e0'" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Middle Name</label>
                            <input id="middleName" type="text" value="${editData.middleName || ""}" placeholder="Middle" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; transition: border-color 0.2s;" onmouseover="this.style.borderBottomColor='#667eea'" onmouseout="this.style.borderBottomColor='#e0e0e0'" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Last Name</label>
                            <input id="lastName" type="text" value="${editData.lastName || ""}" placeholder="Last" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; transition: border-color 0.2s;" onmouseover="this.style.borderBottomColor='#667eea'" onmouseout="this.style.borderBottomColor='#e0e0e0'" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Email</label>
                            <input id="email" type="email" value="${editData.email || ""}" placeholder="email@example.com" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; transition: border-color 0.2s;" onmouseover="this.style.borderBottomColor='#667eea'" onmouseout="this.style.borderBottomColor='#e0e0e0'" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Contact</label>
                            <input id="contactNumber" type="text" value="${editData.contactNumber || ""}" placeholder="+63" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; transition: border-color 0.2s;" onmouseover="this.style.borderBottomColor='#667eea'" onmouseout="this.style.borderBottomColor='#e0e0e0'" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Role</label>
                            <select id="role" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; cursor: pointer; transition: border-color 0.2s;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'">
                                <option value="CampusAdmin" ${editData.role === "CampusAdmin" ? "selected" : ""}>CampusAdmin</option>
                                <option value="Faculty" ${editData.role === "Faculty" ? "selected" : ""}>Faculty</option>
                                <option value="LabTech" ${editData.role === "LabTech" ? "selected" : ""}>LabTech</option>
                            </select>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 12px; padding-top: 12px; border-top: 1px solid #f0f0f0; cursor: pointer;" onclick="document.getElementById('isActive').click();">
                        <label style="font-weight: 500; color: #555; margin: 0; font-size: 13px; cursor: pointer;">Active Status</label>
                        <div style="position: relative; display: inline-block; width: 48px; height: 24px;">
                            <input id="isActive" type="checkbox" ${editData.isActive ? "checked" : ""} style="opacity: 0; width: 0; height: 0; cursor: pointer;" />
                            <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: ${editData.isActive ? "#667eea" : "#ddd"}; transition: 0.3s; border-radius: 24px;"></span>
                            <span style="position: absolute; content: ''; height: 20px; width: 20px; left: ${editData.isActive ? "24px" : "2px"}; bottom: 2px; background-color: white; transition: 0.3s; border-radius: 50%;"></span>
                        </div>
                        <span id="statusText" style="font-size: 12px; color: ${editData.isActive ? "#22c55e" : "#ef4444"}; font-weight: 500;">${editData.isActive ? "Active" : "Inactive"}</span>
                    </div>
                </div>
            `,
      width: "750px",
      showCancelButton: true,
      confirmButtonText: "Save",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#667eea",
      cancelButtonColor: "#e0e0e0",
      didOpen: () => {
        const firstNameInput = document.getElementById("firstName");
        if (firstNameInput)
          firstNameInput.focus();
        const checkbox = document.getElementById("isActive");
        const toggleDiv = checkbox?.parentElement?.parentElement;
        const toggleSpan = checkbox?.parentElement?.querySelector("span:nth-child(2)");
        const toggleCircle = checkbox?.parentElement?.querySelector("span:nth-child(3)");
        const statusText = document.getElementById("statusText");
        if (checkbox && toggleSpan && toggleCircle && toggleDiv) {
          checkbox.addEventListener("change", () => {
            toggleSpan.style.backgroundColor = checkbox.checked ? "#667eea" : "#ddd";
            toggleCircle.style.left = checkbox.checked ? "24px" : "2px";
            if (statusText) {
              statusText.textContent = checkbox.checked ? "Active" : "Inactive";
              statusText.style.color = checkbox.checked ? "#22c55e" : "#ef4444";
            }
          });
          toggleDiv.addEventListener("click", (e) => {
            if (e.target !== checkbox) {
              checkbox.checked = !checkbox.checked;
              checkbox.dispatchEvent(new Event("change", { bubbles: true }));
            }
          });
          toggleSpan?.addEventListener("click", () => {
            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(new Event("change", { bubbles: true }));
          });
          toggleCircle?.addEventListener("click", () => {
            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(new Event("change", { bubbles: true }));
          });
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const firstName = document.getElementById("firstName").value;
        const middleName = document.getElementById("middleName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const contactNumber = document.getElementById("contactNumber").value;
        const role = document.getElementById("role").value;
        const isActive = document.getElementById("isActive").checked;
        const updatedData = {
          firstName: firstName || user.firstName,
          middleName: middleName || user.middleName,
          lastName: lastName || user.lastName,
          email: email || user.email,
          contactNumber: contactNumber || user.contactNumber,
          role: role || user.role,
          isActive
        };
        this.userService.updateUser(user.userId, updatedData).subscribe({
          next: () => {
            import_sweetalert2.default.fire({
              title: "Success!",
              text: "User updated successfully",
              icon: "success"
            });
            this.loadUsers();
          },
          error: (error) => {
            import_sweetalert2.default.fire({
              title: "Error",
              text: "Failed to update user: " + (error.error?.message || error.message),
              icon: "error"
            });
          }
        });
      }
    });
  }
  deleteUser(user) {
    const userId = user.userId || user.user_id;
    console.log("Deleting single user:", userId, "Full user object:", user);
    import_sweetalert2.default.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d"
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(userId).subscribe({
          next: () => {
            console.log("User deleted successfully:", userId);
            import_sweetalert2.default.fire({
              title: "Deleted!",
              text: "User has been deleted successfully.",
              icon: "success"
            });
            this.loadUsers();
          },
          error: (error) => {
            console.error("Error deleting user:", userId, error);
            import_sweetalert2.default.fire({
              title: "Error",
              text: "Failed to delete user: " + (error.error?.message || error.message),
              icon: "error"
            });
          }
        });
      }
    });
  }
  openNewUserDialog() {
    let userId = this.userContextService.getUserId();
    if (!userId) {
      const currentUser = localStorage.getItem("currentUser");
      if (currentUser) {
        const user = JSON.parse(currentUser);
        userId = user.userId || user.user_id || user.id;
      }
    }
    if (!userId) {
      import_sweetalert2.default.fire({
        title: "Error",
        text: "User ID not found. Please log in again.",
        icon: "error"
      });
      return;
    }
    this.userService.getUserById(userId).subscribe({
      next: (loggedInUser) => {
        console.log("\u{1F535} New User Dialog Opened");
        console.log("Logged-in User Data:", loggedInUser);
        console.log("Campus:", loggedInUser.campus || loggedInUser.Campus);
        console.log("Department:", loggedInUser.department || loggedInUser.Department);
        sessionStorage.setItem("loggedInUserData", JSON.stringify(loggedInUser));
        this.showNewUserDialog();
      },
      error: (error) => {
        console.error("Error fetching user data:", error);
        this.showNewUserDialog();
      }
    });
  }
  showNewUserDialog() {
    const newUserData = {
      userName: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      middleName: "",
      contactNumber: "",
      department: "",
      campus: "",
      role: "CampusAdmin",
      isActive: true,
      isStaff: false,
      isSuperUser: false
    };
    const userId = this.userContextService.getUserId();
    const loggedInUserData = JSON.parse(sessionStorage.getItem("loggedInUserData") || "{}");
    const currentUserRole = loggedInUserData.role || this.currentUserRole || "";
    const isCampusAdmin = currentUserRole === "CampusAdmin";
    const isSuperAdmin = currentUserRole === "SuperAdmin";
    const campusAdminCampusId = loggedInUserData.campus?.campusId || loggedInUserData.campusId || "";
    let campusAdminCampusName = loggedInUserData.campus?.campusName || loggedInUserData.campusName || "";
    if (!campusAdminCampusName && campusAdminCampusId) {
      const foundCampus = this.campuses.find((c) => c.campusId === campusAdminCampusId);
      campusAdminCampusName = foundCampus?.campusName || "";
    }
    const filteredDepartments = isCampusAdmin ? this.departments.filter((dept) => dept.campus?.campusId === campusAdminCampusId) : this.departments;
    import_sweetalert2.default.fire({
      title: "",
      titleText: "",
      html: `
                <div style="text-align: left; width: 100%; max-width: 700px; margin: 0 auto;">
                    <div style="background: #f5f5f5; color: #333; padding: 16px; margin: -16px -16px 16px -16px; border-radius: 8px 8px 0 0;">
                        <h2 style="margin: 0; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">\u2795 Add New User</h2>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">First Name *</label>
                            <input id="newFirstName" type="text" placeholder="First" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Middle Name</label>
                            <input id="newMiddleName" type="text" placeholder="Middle" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Last Name *</label>
                            <input id="newLastName" type="text" placeholder="Last" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">User ID *</label>
                            <input id="newUserId" type="text" placeholder="user123" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Username *</label>
                            <input id="newUserName" type="text" placeholder="username" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Email *</label>
                            <input id="newEmail" type="email" placeholder="email@example.com" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Password *</label>
                            <input id="newPassword" type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Contact Number</label>
                            <input id="newContactNumber" type="text" placeholder="+63" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                    </div>
                    ${isSuperAdmin ? `
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus *</label>
                            <select id="newCampus" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'">
                                <option value="">-- Select Campus --</option>
                                ${this.campuses.map((campus) => `<option value="${campus.campusId}">${campus.campusName}</option>`).join("")}
                            </select>
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Role * <span style="color: #999; font-size: 11px;">(Auto)</span></label>
                            <input id="newRole" type="text" value="CampusAdmin" placeholder="Role" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #ccc; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; color: #999; cursor: not-allowed;" disabled />
                        </div>
                    </div>
                    ` : !isCampusAdmin ? `
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Department * <span style="color: #999; font-size: 11px;">(Auto)</span></label>
                            <input id="newDepartment" type="text" value="Default Department" placeholder="Department" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #ccc; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; color: #999; cursor: not-allowed;" disabled />
                            <input id="newDepartmentId" type="hidden" value="DEPT-001" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus *</label>
                            <select id="newCampus" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'">
                                <option value="">-- Select Campus --</option>
                                ${this.campuses.map((campus) => `<option value="${campus.campusId}">${campus.campusName}</option>`).join("")}
                            </select>
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Role * <span style="color: #999; font-size: 11px;">(Auto)</span></label>
                            <input id="newRole" type="text" value="CampusAdmin" placeholder="Role" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #ccc; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; color: #999; cursor: not-allowed;" disabled />
                        </div>
                    </div>
                    ` : `
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Department *</label>
                            <select id="newDepartment" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'">
                                <option value="">-- Select Department --</option>
                                ${filteredDepartments.map((dept) => `<option value="${dept.departmentId}">${dept.departmentName}</option>`).join("")}
                            </select>
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus <span style="color: #999; font-size: 11px;">(Auto)</span></label>
                            <input id="newCampus" type="text" value="${campusAdminCampusName}" placeholder="Campus" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #ccc; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent; color: #999; cursor: not-allowed;" disabled />
                            <input id="newCampusHidden" type="hidden" value="${campusAdminCampusId}" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Role *</label>
                            <select id="newRole" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'">
                                <option value="Faculty">Faculty</option>
                                <option value="LabTech">LabTech</option>
                            </select>
                        </div>
                    </div>
                    <input id="newCampusHidden" type="hidden" value="${campusAdminCampusId}" />
                    `}
                    <div style="display: flex; align-items: center; gap: 12px; padding-top: 12px; border-top: 1px solid #f0f0f0;">
                        <label style="font-weight: 500; color: #555; margin: 0; font-size: 13px; flex: 1;">Active Status</label>
                        <div style="position: relative; display: inline-block; width: 48px; height: 24px;">
                            <input id="newIsActive" type="checkbox" checked style="opacity: 0; width: 0; height: 0; cursor: pointer;" />
                            <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #667eea; transition: 0.3s; border-radius: 24px;"></span>
                            <span style="position: absolute; content: ''; height: 20px; width: 20px; left: 24px; bottom: 2px; background-color: white; transition: 0.3s; border-radius: 50%;"></span>
                        </div>
                    </div>
                </div>
            `,
      width: "750px",
      showCancelButton: true,
      confirmButtonText: "Create User",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#667eea",
      cancelButtonColor: "#e0e0e0",
      didOpen: () => {
        const firstNameInput = document.getElementById("newFirstName");
        if (firstNameInput)
          firstNameInput.focus();
        if (!isCampusAdmin) {
          const campusSelect = document.getElementById("newCampus");
          const departmentSelect = document.getElementById("newDepartment");
          const deptLockStatus = document.getElementById("deptLockStatus");
          if (campusSelect && departmentSelect) {
            campusSelect.addEventListener("change", (e) => {
              const selectedCampusId = e.target.value;
              if (selectedCampusId) {
                const filteredDepts = this.departments.filter((dept) => dept.campus && dept.campus.campusId === selectedCampusId);
                departmentSelect.innerHTML = '<option value="">-- Select Department --</option>';
                filteredDepts.forEach((dept) => {
                  const option = document.createElement("option");
                  option.value = dept.departmentId;
                  option.textContent = dept.departmentName;
                  departmentSelect.appendChild(option);
                });
                departmentSelect.disabled = false;
                departmentSelect.style.color = "#333";
                departmentSelect.style.borderBottomColor = "#e0e0e0";
                departmentSelect.style.cursor = "pointer";
                deptLockStatus.textContent = "";
              } else {
                departmentSelect.disabled = true;
                departmentSelect.innerHTML = '<option value="">-- Select Department --</option>';
                departmentSelect.style.color = "#999";
                departmentSelect.style.borderBottomColor = "#ccc";
                departmentSelect.style.cursor = "not-allowed";
                deptLockStatus.textContent = "(Select Campus First)";
              }
            });
          }
        }
        const toggleCheckbox = document.getElementById("newIsActive");
        const toggleDiv = toggleCheckbox?.parentElement?.parentElement;
        const toggleSpan = toggleCheckbox?.parentElement?.querySelector("span:nth-child(2)");
        const toggleCircle = toggleCheckbox?.parentElement?.querySelector("span:nth-child(3)");
        if (toggleCheckbox && toggleSpan && toggleCircle && toggleDiv) {
          toggleCheckbox.addEventListener("change", () => {
            toggleSpan.style.backgroundColor = toggleCheckbox.checked ? "#667eea" : "#ddd";
            toggleCircle.style.left = toggleCheckbox.checked ? "24px" : "2px";
          });
          toggleDiv.addEventListener("click", (e) => {
            if (e.target !== toggleCheckbox) {
              toggleCheckbox.checked = !toggleCheckbox.checked;
              toggleCheckbox.dispatchEvent(new Event("change", { bubbles: true }));
            }
          });
          toggleSpan?.addEventListener("click", () => {
            toggleCheckbox.checked = !toggleCheckbox.checked;
            toggleCheckbox.dispatchEvent(new Event("change", { bubbles: true }));
          });
          toggleCircle?.addEventListener("click", () => {
            toggleCheckbox.checked = !toggleCheckbox.checked;
            toggleCheckbox.dispatchEvent(new Event("change", { bubbles: true }));
          });
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const userIdElement = document.getElementById("newUserId");
        const firstNameElement = document.getElementById("newFirstName");
        const lastNameElement = document.getElementById("newLastName");
        const userNameElement = document.getElementById("newUserName");
        const emailElement = document.getElementById("newEmail");
        const passwordElement = document.getElementById("newPassword");
        const middleNameElement = document.getElementById("newMiddleName");
        const contactNumberElement = document.getElementById("newContactNumber");
        const departmentElement = document.getElementById("newDepartment");
        const departmentIdElement = document.getElementById("newDepartmentId");
        const userId2 = userIdElement ? userIdElement.value.trim() : "";
        const firstName = firstNameElement ? firstNameElement.value.trim() : "";
        const lastName = lastNameElement ? lastNameElement.value.trim() : "";
        const userName = userNameElement ? userNameElement.value.trim() : "";
        const email = emailElement ? emailElement.value.trim() : "";
        const password = passwordElement ? passwordElement.value.trim() : "";
        const middleName = middleNameElement ? middleNameElement.value.trim() : "";
        const contactNumber = contactNumberElement ? contactNumberElement.value.trim() : "";
        let department = "";
        if (isCampusAdmin) {
          department = departmentElement ? departmentElement.value : "";
        } else {
          department = "";
        }
        const campusInput = document.getElementById("newCampus");
        const campusHiddenInput = document.getElementById("newCampusHidden");
        let campus = "";
        if (isCampusAdmin) {
          campus = campusHiddenInput ? campusHiddenInput.value : campusAdminCampusId;
        } else {
          campus = campusInput ? campusInput.value : "";
        }
        const role = document.getElementById("newRole");
        const roleValue = role ? role.value : "";
        const isActiveElement = document.getElementById("newIsActive");
        const isActive = isActiveElement ? isActiveElement.checked : true;
        if (!userId2) {
          import_sweetalert2.default.fire({ title: "Error", text: "User ID is required", icon: "error" });
          return;
        }
        if (!firstName) {
          import_sweetalert2.default.fire({ title: "Error", text: "First Name is required", icon: "error" });
          return;
        }
        if (!lastName) {
          import_sweetalert2.default.fire({ title: "Error", text: "Last Name is required", icon: "error" });
          return;
        }
        if (!userName) {
          import_sweetalert2.default.fire({ title: "Error", text: "Username is required", icon: "error" });
          return;
        }
        if (!email || !this.isValidEmail(email)) {
          import_sweetalert2.default.fire({ title: "Error", text: "Valid email is required", icon: "error" });
          return;
        }
        if (!password || password.length < 6) {
          import_sweetalert2.default.fire({ title: "Error", text: "Password must be at least 6 characters", icon: "error" });
          return;
        }
        if (isCampusAdmin && !department) {
          import_sweetalert2.default.fire({ title: "Error", text: "Department is required", icon: "error" });
          return;
        }
        if (!campus) {
          import_sweetalert2.default.fire({ title: "Error", text: "Campus is required", icon: "error" });
          return;
        }
        const newUserPayload = {
          userId: userId2,
          userName,
          email,
          password,
          firstName,
          lastName,
          middleName: middleName || void 0,
          contactNumber: contactNumber || void 0,
          campus,
          role: roleValue,
          isActive,
          profilePicture: void 0
        };
        if (isCampusAdmin) {
          newUserPayload.department = department;
        }
        console.log("\u{1F4E4} Creating user with payload:", newUserPayload);
        this.userService.createUser(newUserPayload).subscribe({
          next: () => {
            import_sweetalert2.default.fire({
              title: "Success!",
              text: "User created successfully",
              icon: "success"
            });
            this.loadUsers();
          },
          error: (error) => {
            import_sweetalert2.default.fire({
              title: "Error",
              text: "Failed to create user: " + (error.error?.message || error.message),
              icon: "error"
            });
          }
        });
      }
    });
  }
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  deleteSelectedUsers() {
    if (!this.selectedUsers || this.selectedUsers.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", detail: "Please select users to delete" });
      return;
    }
    import_sweetalert2.default.fire({
      title: "Confirm Delete",
      text: `Are you sure you want to delete ${this.selectedUsers.length} user(s)?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete All",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        let deletedCount = 0;
        let failedCount = 0;
        this.selectedUsers.forEach((user) => {
          const userId = user.userId || user.user_id;
          console.log("Deleting user:", userId, "Full user object:", user);
          this.userService.deleteUser(userId).subscribe({
            next: () => {
              deletedCount++;
              console.log(`User deleted: ${userId} (${deletedCount}/${this.selectedUsers.length})`);
              if (deletedCount + failedCount === this.selectedUsers.length) {
                this.selectedUsers = [];
                this.loadUsers();
                import_sweetalert2.default.fire({
                  title: "Deleted!",
                  text: `${deletedCount} user(s) deleted successfully.`,
                  icon: "success"
                });
              }
            },
            error: (error) => {
              failedCount++;
              console.error(`Failed to delete user ${userId}:`, error);
              if (deletedCount + failedCount === this.selectedUsers.length) {
                this.selectedUsers = [];
                this.loadUsers();
                import_sweetalert2.default.fire({
                  title: "Partial Delete",
                  text: `${deletedCount} user(s) deleted, ${failedCount} failed.`,
                  icon: "warning"
                });
              }
            }
          });
        });
      }
    });
  }
  exportCSV() {
    if (this.filteredUsers.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", detail: "No data to export" });
      return;
    }
    const csv = this.generateCSV(this.filteredUsers);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "users_export.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.messageService.add({ severity: "success", summary: "Success", detail: "Users exported to CSV" });
  }
  generateCSV(data) {
    const headers = ["Name", "Email", "Department", "Campus", "Role"];
    const rows = data.map((user) => [`${user.FirstName || ""} ${user.LastName || ""}`, user.email || "", user.Department || "", user.Campus || "", user.role || ""]);
    const csvContent = [headers.join(","), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n");
    return csvContent;
  }
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(UserContextService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], viewQuery: function UsersComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 12, vars: 11, consts: [["start", ""], ["end", ""], ["dt", ""], ["body", ""], ["styleClass", "mb-4"], ["dataKey", "userId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} users", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "rowHover", "loading", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search users...", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], ["pSortableColumn", "userId", 2, "min-width", "10rem"], ["field", "userId"], ["pSortableColumn", "firstName", 2, "min-width", "15rem"], ["field", "firstName"], ["pSortableColumn", "campus.campusName", 2, "min-width", "12rem"], ["field", "campus.campusName"], ["pSortableColumn", "role", 2, "min-width", "10rem"], ["field", "role"], ["pSortableColumn", "isActive", 2, "min-width", "8rem"], ["field", "isActive"], [2, "min-width", "10rem"], [3, "value"], [3, "value", "severity"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "severity", "info", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", 3, "onClick", "rounded", "text"], ["colspan", "7", 1, "text-center", "py-5"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 4);
      \u0275\u0275template(2, UsersComponent_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, UsersComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 5, 2);
      \u0275\u0275twoWayListener("selectionChange", function UsersComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedUsers, $event) || (ctx.selectedUsers = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("selectionChange", function UsersComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange($event));
      });
      \u0275\u0275template(8, UsersComponent_ng_template_8_Template, 20, 0, "ng-template", 6)(9, UsersComponent_ng_template_9_Template, 18, 15, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(11, UsersComponent_ng_template_11_Template, 3, 0, "ng-template", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filteredUsers)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c1))("rowHover", true)("loading", ctx.loading);
      \u0275\u0275twoWayProperty("selection", ctx.selectedUsers);
      \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c2));
    }
  }, dependencies: [CommonModule, CardModule, PrimeTemplate, ButtonModule, Button, TableModule, Table, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, InputTextModule, InputText, TooltipModule, ToolbarModule, Toolbar, ToastModule, Toast, IconFieldModule, IconField, InputIconModule, InputIcon, TagModule, Tag, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.users-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.users-table[_ngcontent-%COMP%]   .p-datatable[_ngcontent-%COMP%]   .p-datatable-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #495057;\n  font-weight: 600;\n  border-bottom: 2px solid #dee2e6;\n  padding: 1rem;\n}\n.users-table[_ngcontent-%COMP%]   .p-datatable[_ngcontent-%COMP%]   .p-datatable-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%]:hover {\n  background-color: #f1f3f5;\n}\n.users-table[_ngcontent-%COMP%]   .p-datatable[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dee2e6;\n  transition: background-color 0.2s ease;\n}\n.users-table[_ngcontent-%COMP%]   .p-datatable[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover {\n  background-color: var(--highlight-bg) !important;\n  cursor: pointer;\n}\n.users-table[_ngcontent-%COMP%]   .p-datatable[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  color: #212529;\n  vertical-align: middle;\n}\n.users-table[_ngcontent-%COMP%]   .p-datatable[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%]    > tr.row-selected[_ngcontent-%COMP%] {\n  background-color: var(--primary-color-text) !important;\n  color: var(--primary-color) !important;\n  border-left: 3px solid var(--primary-color) !important;\n}\n.users-table[_ngcontent-%COMP%]   .p-datatable[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%]    > tr.row-selected[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--primary-color) !important;\n}\n.users-table[_ngcontent-%COMP%]   .p-datatable[_ngcontent-%COMP%]   .p-datatable-emptymessage[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #999;\n  background-color: #f8f9fa;\n}\n.users-table[_ngcontent-%COMP%]   .p-paginator[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  padding: 1rem;\n}\n.users-table[_ngcontent-%COMP%]   .p-paginator[_ngcontent-%COMP%]   .p-paginator-left-content[_ngcontent-%COMP%], \n.users-table[_ngcontent-%COMP%]   .p-paginator[_ngcontent-%COMP%]   .p-paginator-right-content[_ngcontent-%COMP%] {\n  color: #495057;\n}\n.users-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  padding: 0;\n}\n.users-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.users-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.users-search-bar[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.users-search-bar[_ngcontent-%COMP%]   .p-input-icon-left[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.users-search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 2px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.users-search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n  background-color: #f8f9ff;\n}\n.users-search-bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #adb5bd;\n}\n.users-search-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #adb5bd;\n  left: 0.75rem;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: center;\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]     .p-button.p-button-rounded {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]     .p-button.p-button-rounded:hover {\n  transform: scale(1.05);\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]     .p-button.p-button-info {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]     .p-button.p-button-info:hover {\n  background-color: #138496;\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]     .p-button.p-button-warning {\n  background-color: #ffc107;\n  border-color: #ffc107;\n  color: #000;\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]     .p-button.p-button-warning:hover {\n  background-color: #e0a800;\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]     .p-button.p-button-danger {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]     .p-button.p-button-danger:hover {\n  background-color: #c82333;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid #f0f0f0;\n  background-color: #fff;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .users-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .users-table[_ngcontent-%COMP%]   .p-datatable[_ngcontent-%COMP%]   .p-datatable-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    padding: 0.75rem;\n  }\n  .users-table[_ngcontent-%COMP%]   .p-datatable[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=_users.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, TagModule, FormsModule], providers: [MessageService], template: `
        <p-toast />

        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNewUserDialog()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelectedUsers()" [disabled]="!selectedUsers.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filterUsers()" placeholder="Search users..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            #dt
            [value]="filteredUsers"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [rowHover]="true"
            [loading]="loading"
            dataKey="userId"
            [(selection)]="selectedUsers"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} users"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th pSortableColumn="userId" style="min-width:10rem">ID <p-sortIcon field="userId" /></th>
                    <th pSortableColumn="firstName" style="min-width:15rem">Name <p-sortIcon field="firstName" /></th>
                    <th pSortableColumn="campus.campusName" style="min-width:12rem">Campus <p-sortIcon field="campus.campusName" /></th>
                    <th pSortableColumn="role" style="min-width:10rem">Role <p-sortIcon field="role" /></th>
                    <th pSortableColumn="isActive" style="min-width:8rem">Status <p-sortIcon field="isActive" /></th>
                    <th style="min-width:10rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template #body let-user>
                <tr>
                    <td style="width: 3rem">
                        <p-tableCheckbox [value]="user" />
                    </td>
                    <td>{{ user.userId }}</td>
                    <td>{{ user.firstName }} {{ user.middleName || '' }} {{ user.lastName }}</td>
                    <td>{{ user.campus?.campusName || 'N/A' }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <p-tag [value]="user.isActive ? 'Active' : 'Inactive'" [severity]="user.isActive ? 'success' : 'danger'" />
                    </td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="viewUser(user)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="editUser(user)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="deleteUser(user)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="7" class="text-center py-5">No users found</td>
                </tr>
            </ng-template>
        </p-table>
    `, styles: ["/* src/assets/pages/_users.scss */\n.users-container {\n  width: 100%;\n}\n.users-table .p-datatable .p-datatable-thead > tr > th {\n  background-color: #f8f9fa;\n  color: #495057;\n  font-weight: 600;\n  border-bottom: 2px solid #dee2e6;\n  padding: 1rem;\n}\n.users-table .p-datatable .p-datatable-thead > tr > th:hover {\n  background-color: #f1f3f5;\n}\n.users-table .p-datatable .p-datatable-tbody > tr {\n  border-bottom: 1px solid #dee2e6;\n  transition: background-color 0.2s ease;\n}\n.users-table .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--highlight-bg) !important;\n  cursor: pointer;\n}\n.users-table .p-datatable .p-datatable-tbody > tr td {\n  padding: 1rem;\n  color: #212529;\n  vertical-align: middle;\n}\n.users-table .p-datatable .p-datatable-tbody > tr.row-selected {\n  background-color: var(--primary-color-text) !important;\n  color: var(--primary-color) !important;\n  border-left: 3px solid var(--primary-color) !important;\n}\n.users-table .p-datatable .p-datatable-tbody > tr.row-selected td {\n  color: var(--primary-color) !important;\n}\n.users-table .p-datatable .p-datatable-emptymessage > tr > td {\n  text-align: center;\n  padding: 2rem;\n  color: #999;\n  background-color: #f8f9fa;\n}\n.users-table .p-paginator {\n  background-color: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  padding: 1rem;\n}\n.users-table .p-paginator .p-paginator-left-content,\n.users-table .p-paginator .p-paginator-right-content {\n  color: #495057;\n}\n.users-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  padding: 0;\n}\n.users-header h5 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.users-header h5 i {\n  color: #667eea;\n}\n.users-search-bar {\n  margin-bottom: 1.5rem;\n}\n.users-search-bar .p-input-icon-left {\n  width: 100%;\n}\n.users-search-bar input {\n  width: 100%;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 2px solid #dee2e6;\n  border-radius: 6px;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.users-search-bar input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n  background-color: #f8f9ff;\n}\n.users-search-bar input::placeholder {\n  color: #adb5bd;\n}\n.users-search-bar i {\n  color: #adb5bd;\n  left: 0.75rem;\n}\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: center;\n}\n.action-buttons p-button ::ng-deep .p-button.p-button-rounded {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n.action-buttons p-button ::ng-deep .p-button.p-button-rounded:hover {\n  transform: scale(1.05);\n}\n.action-buttons p-button ::ng-deep .p-button.p-button-info {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n}\n.action-buttons p-button ::ng-deep .p-button.p-button-info:hover {\n  background-color: #138496;\n}\n.action-buttons p-button ::ng-deep .p-button.p-button-warning {\n  background-color: #ffc107;\n  border-color: #ffc107;\n  color: #000;\n}\n.action-buttons p-button ::ng-deep .p-button.p-button-warning:hover {\n  background-color: #e0a800;\n}\n.action-buttons p-button ::ng-deep .p-button.p-button-danger {\n  background-color: #dc3545;\n  border-color: #dc3545;\n}\n.action-buttons p-button ::ng-deep .p-button.p-button-danger:hover {\n  background-color: #c82333;\n}\n.card {\n  border-radius: 8px;\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n.card .card-header {\n  padding: 1.5rem;\n  border-bottom: 1px solid #f0f0f0;\n  background-color: #fff;\n}\n.card .card-header h5 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #1a1a1a;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .users-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .users-table .p-datatable .p-datatable-thead > tr > th {\n    font-size: 0.875rem;\n    padding: 0.75rem;\n  }\n  .users-table .p-datatable .p-datatable-tbody > tr > td {\n    padding: 0.75rem;\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=_users.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: MessageService }, { type: UserContextService }], { table: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/pages/users/users.ts", lineNumber: 100 });
})();

// src/app/pages/campuses/campuses.ts
var import_sweetalert22 = __toESM(require_sweetalert2_all());
var _c02 = ["dt"];
var _c12 = () => [10, 20, 30];
var _c22 = () => ({ "min-width": "70rem" });
function CampusesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 8);
    \u0275\u0275listener("onClick", function CampusesComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewCampusDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 9);
    \u0275\u0275listener("onClick", function CampusesComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelectedCampuses());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedCampuses.length);
  }
}
function CampusesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function CampusesComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 11);
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function CampusesComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function CampusesComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterCampuses());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function CampusesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 13);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 14);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 15);
    \u0275\u0275text(6, "Campus ");
    \u0275\u0275element(7, "p-sortIcon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 17);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function CampusesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 19)(9, "p-button", 20);
    \u0275\u0275listener("onClick", function CampusesComponent_ng_template_8_Template_p_button_onClick_9_listener() {
      const campus_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewCampus(campus_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-button", 21);
    \u0275\u0275listener("onClick", function CampusesComponent_ng_template_8_Template_p_button_onClick_10_listener() {
      const campus_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editCampus(campus_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 22);
    \u0275\u0275listener("onClick", function CampusesComponent_ng_template_8_Template_p_button_onClick_11_listener() {
      const campus_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteCampus(campus_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const campus_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", campus_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(campus_r6.campusId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(campus_r6.campusName);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function CampusesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No campuses found");
    \u0275\u0275elementEnd()();
  }
}
var CampusesComponent = class _CampusesComponent {
  userService;
  messageService;
  table;
  campuses = [];
  filteredCampuses = [];
  selectedCampuses = [];
  searchValue = "";
  loading = false;
  constructor(userService, messageService) {
    this.userService = userService;
    this.messageService = messageService;
  }
  ngOnInit() {
    console.log("CampusesComponent initialized");
    this.loadCampuses();
  }
  loadCampuses() {
    console.log("Loading campuses...");
    this.loading = true;
    this.userService.getCampuses().subscribe({
      next: (response) => {
        console.log("Campuses loaded:", response);
        this.campuses = Array.isArray(response) ? response : response.data || [];
        this.filteredCampuses = [...this.campuses];
        this.loading = false;
        console.log("Campuses set:", this.campuses);
      },
      error: (error) => {
        console.error("Error loading campuses:", error);
        import_sweetalert22.default.fire({
          title: "Error",
          text: "Failed to load campuses: " + (error.error?.message || error.message),
          icon: "error"
        });
        this.loading = false;
      }
    });
  }
  filterCampuses() {
    if (!this.searchValue.trim()) {
      this.filteredCampuses = [...this.campuses];
      return;
    }
    const search = this.searchValue.toLowerCase();
    this.filteredCampuses = this.campuses.filter((campus) => campus.campusName?.toLowerCase().includes(search) || campus.campusDirector?.toLowerCase().includes(search));
  }
  onSelectionChange(event) {
    console.log("Selection changed:", event);
    console.log("Selected campuses:", this.selectedCampuses);
    if (this.selectedCampuses && this.selectedCampuses.length > 0) {
      console.log("Selected campus IDs:", this.selectedCampuses.map((c) => c.campusId));
    }
  }
  viewCampus(campus) {
    const createdDate = new Date(campus.campusCreated).toLocaleDateString();
    const updatedDate = new Date(campus.campusUpdated).toLocaleDateString();
    import_sweetalert22.default.fire({
      title: campus.campusName,
      html: `
                <div style="text-align: left;">
                    <p><strong>Campus Director:</strong> ${campus.campusDirector || "N/A"}</p>
                    <p><strong>Created:</strong> ${createdDate}</p>
                    <p><strong>Updated:</strong> ${updatedDate}</p>
                </div>
            `,
      icon: "info",
      confirmButtonText: "Close"
    });
  }
  editCampus(campus) {
    const editData = {
      campusName: campus.campusName,
      campusDirector: campus.campusDirector
    };
    import_sweetalert22.default.fire({
      title: "",
      titleText: "",
      html: `
                <div style="text-align: left; width: 100%; max-width: 500px; margin: 0 auto;">
                    <div style="background: #f5f5f5; color: #333; padding: 16px; margin: -16px -16px 16px -16px; border-radius: 8px 8px 0 0;">
                        <h2 style="margin: 0; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">\u270E Edit Campus</h2>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus Name *</label>
                            <input id="campusName" type="text" value="${editData.campusName}" placeholder="Campus Name" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus Director *</label>
                            <input id="campusDirector" type="text" value="${editData.campusDirector}" placeholder="Director Name" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                    </div>
                </div>
            `,
      width: "550px",
      showCancelButton: true,
      confirmButtonText: "Update Campus",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#667eea",
      cancelButtonColor: "#e0e0e0",
      didOpen: () => {
        const campusNameInput = document.getElementById("campusName");
        if (campusNameInput)
          campusNameInput.focus();
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const campusName = document.getElementById("campusName").value.trim();
        const campusDirector = document.getElementById("campusDirector").value.trim();
        if (!campusName) {
          import_sweetalert22.default.fire({ title: "Error", text: "Campus Name is required", icon: "error" });
          return;
        }
        if (!campusDirector) {
          import_sweetalert22.default.fire({ title: "Error", text: "Campus Director is required", icon: "error" });
          return;
        }
        const updatedData = {
          campusName,
          campusDirector
        };
        this.userService.updateCampus(campus.campusId, updatedData).subscribe({
          next: () => {
            import_sweetalert22.default.fire({
              title: "Success!",
              text: "Campus updated successfully",
              icon: "success"
            });
            this.loadCampuses();
          },
          error: (error) => {
            import_sweetalert22.default.fire({
              title: "Error",
              text: "Failed to update campus: " + (error.error?.message || error.message),
              icon: "error"
            });
          }
        });
      }
    });
  }
  deleteCampus(campus) {
    const campusId = campus.campusId;
    console.log("Deleting single campus:", campusId, "Full campus object:", campus);
    import_sweetalert22.default.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this campus?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d"
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteCampus(campusId).subscribe({
          next: () => {
            console.log("Campus deleted successfully:", campusId);
            import_sweetalert22.default.fire({
              title: "Deleted!",
              text: "Campus has been deleted successfully.",
              icon: "success"
            });
            this.loadCampuses();
          },
          error: (error) => {
            console.error("Error deleting campus:", campusId, error);
            import_sweetalert22.default.fire({
              title: "Error",
              text: "Failed to delete campus: " + (error.error?.message || error.message),
              icon: "error"
            });
          }
        });
      }
    });
  }
  openNewCampusDialog() {
    import_sweetalert22.default.fire({
      title: "",
      titleText: "",
      html: `
                <div style="text-align: left; width: 100%; max-width: 500px; margin: 0 auto;">
                    <div style="background: #f5f5f5; color: #333; padding: 16px; margin: -16px -16px 16px -16px; border-radius: 8px 8px 0 0;">
                        <h2 style="margin: 0; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">\u2795 Add New Campus</h2>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus Name *</label>
                            <input id="newCampusName" type="text" placeholder="Campus Name" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Campus Director *</label>
                            <input id="newCampusDirector" type="text" placeholder="Director Name" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                    </div>
                </div>
            `,
      width: "550px",
      showCancelButton: true,
      confirmButtonText: "Create Campus",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#667eea",
      cancelButtonColor: "#e0e0e0",
      didOpen: () => {
        const campusNameInput = document.getElementById("newCampusName");
        if (campusNameInput)
          campusNameInput.focus();
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const campusName = document.getElementById("newCampusName").value.trim();
        const campusDirector = document.getElementById("newCampusDirector").value.trim();
        if (!campusName) {
          import_sweetalert22.default.fire({ title: "Error", text: "Campus Name is required", icon: "error" });
          return;
        }
        if (!campusDirector) {
          import_sweetalert22.default.fire({ title: "Error", text: "Campus Director is required", icon: "error" });
          return;
        }
        const newCampusPayload = {
          campusName,
          campusDirector
        };
        this.userService.createCampus(newCampusPayload).subscribe({
          next: () => {
            import_sweetalert22.default.fire({
              title: "Success!",
              text: "Campus created successfully",
              icon: "success"
            });
            this.loadCampuses();
          },
          error: (error) => {
            import_sweetalert22.default.fire({
              title: "Error",
              text: "Failed to create campus: " + (error.error?.message || error.message),
              icon: "error"
            });
          }
        });
      }
    });
  }
  deleteSelectedCampuses() {
    if (!this.selectedCampuses || this.selectedCampuses.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", detail: "Please select campuses to delete" });
      return;
    }
    import_sweetalert22.default.fire({
      title: "Confirm Delete",
      text: `Are you sure you want to delete ${this.selectedCampuses.length} campus(es)?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete All",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        let deletedCount = 0;
        let failedCount = 0;
        this.selectedCampuses.forEach((campus) => {
          const campusId = campus.campusId;
          console.log("Deleting campus:", campusId);
          this.userService.deleteCampus(campusId).subscribe({
            next: () => {
              deletedCount++;
              console.log(`Campus deleted: ${campusId} (${deletedCount}/${this.selectedCampuses.length})`);
              if (deletedCount + failedCount === this.selectedCampuses.length) {
                this.selectedCampuses = [];
                this.loadCampuses();
                import_sweetalert22.default.fire({
                  title: "Deleted!",
                  text: `${deletedCount} campus(es) deleted successfully.`,
                  icon: "success"
                });
              }
            },
            error: (error) => {
              failedCount++;
              console.error(`Failed to delete campus ${campusId}:`, error);
              if (deletedCount + failedCount === this.selectedCampuses.length) {
                this.selectedCampuses = [];
                this.loadCampuses();
                import_sweetalert22.default.fire({
                  title: "Partial Delete",
                  text: `${deletedCount} campus(es) deleted, ${failedCount} failed.`,
                  icon: "warning"
                });
              }
            }
          });
        });
      }
    });
  }
  exportCSV() {
    if (this.filteredCampuses.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", detail: "No data to export" });
      return;
    }
    const csv = this.generateCSV(this.filteredCampuses);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "campuses_export.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.messageService.add({ severity: "success", summary: "Success", detail: "Campuses exported to CSV" });
  }
  generateCSV(data) {
    const headers = ["Campus Name", "Campus Director"];
    const rows = data.map((campus) => [campus.campusName || "", campus.campusDirector || ""]);
    const csvContent = [headers.join(","), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n");
    return csvContent;
  }
  static \u0275fac = function CampusesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CampusesComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CampusesComponent, selectors: [["app-campuses"]], viewQuery: function CampusesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 10, vars: 11, consts: [["start", ""], ["end", ""], ["styleClass", "mb-4"], ["dataKey", "campusId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} campuses", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search campuses...", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], [2, "min-width", "25rem"], ["pSortableColumn", "campusName", 2, "min-width", "20rem"], ["field", "campusName"], [2, "min-width", "12rem"], [3, "value"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "severity", "info", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", 3, "onClick", "rounded", "text"], ["colspan", "4", 1, "text-center", "py-5"]], template: function CampusesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 2);
      \u0275\u0275template(2, CampusesComponent_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, CampusesComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275twoWayListener("selectionChange", function CampusesComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedCampuses, $event) || (ctx.selectedCampuses = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("selectionChange", function CampusesComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange($event));
      });
      \u0275\u0275template(7, CampusesComponent_ng_template_7_Template, 10, 0, "ng-template", 4)(8, CampusesComponent_ng_template_8_Template, 12, 9, "ng-template", 5)(9, CampusesComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filteredCampuses)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c12))("loading", ctx.loading)("rowHover", true);
      \u0275\u0275twoWayProperty("selection", ctx.selectedCampuses);
      \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c22));
    }
  }, dependencies: [CommonModule, CardModule, PrimeTemplate, ButtonModule, Button, TableModule, Table, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, InputTextModule, InputText, TooltipModule, ToolbarModule, Toolbar, ToastModule, Toast, IconFieldModule, IconField, InputIconModule, InputIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-start;\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: #f8f9fa;\n}\np-table[_ngcontent-%COMP%]     .p-input-icon-left > input {\n  padding-left: 2.5rem;\n}\np-table[_ngcontent-%COMP%]     .p-input-icon-left > .p-input-icon {\n  left: 0.75rem;\n}\n/*# sourceMappingURL=_campuses.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CampusesComponent, [{
    type: Component,
    args: [{ selector: "app-campuses", standalone: true, imports: [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule], providers: [MessageService], template: `
        <p-toast />

        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNewCampusDialog()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelectedCampuses()" [disabled]="!selectedCampuses.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filterCampuses()" placeholder="Search campuses..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>

        <p-table
            [value]="filteredCampuses"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="campusId"
            [(selection)]="selectedCampuses"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} campuses"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="campusName" style="min-width:20rem">Campus <p-sortIcon field="campusName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-campus>
                <tr>
                    <td><p-tableCheckbox [value]="campus" /></td>
                    <td>{{ campus.campusId }}</td>
                    <td>{{ campus.campusName }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="viewCampus(campus)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="editCampus(campus)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="deleteCampus(campus)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" class="text-center py-5">No campuses found</td>
                </tr>
            </ng-template>
        </p-table>
    `, styles: ["/* src/assets/pages/_campuses.scss */\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-start;\n}\n.action-buttons p-button:hover {\n  opacity: 0.8;\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: #f8f9fa;\n}\np-table ::ng-deep .p-input-icon-left > input {\n  padding-left: 2.5rem;\n}\np-table ::ng-deep .p-input-icon-left > .p-input-icon {\n  left: 0.75rem;\n}\n/*# sourceMappingURL=_campuses.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: MessageService }], { table: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CampusesComponent, { className: "CampusesComponent", filePath: "src/app/pages/campuses/campuses.ts", lineNumber: 88 });
})();

// src/app/pages/departments/departments.ts
var import_sweetalert23 = __toESM(require_sweetalert2_all());
var _c03 = ["dt"];
var _c13 = () => [10, 20, 30];
var _c23 = () => ({ "min-width": "70rem" });
function DepartmentsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 8);
    \u0275\u0275listener("onClick", function DepartmentsComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewDepartmentDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 9);
    \u0275\u0275listener("onClick", function DepartmentsComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelectedDepartments());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedDepartments.length);
  }
}
function DepartmentsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function DepartmentsComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 11);
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function DepartmentsComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function DepartmentsComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterDepartments());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function DepartmentsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 13);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 14);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 15);
    \u0275\u0275text(6, "Department ");
    \u0275\u0275element(7, "p-sortIcon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 17);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function DepartmentsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 19)(9, "p-button", 20);
    \u0275\u0275listener("onClick", function DepartmentsComponent_ng_template_8_Template_p_button_onClick_9_listener() {
      const department_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewDepartment(department_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-button", 21);
    \u0275\u0275listener("onClick", function DepartmentsComponent_ng_template_8_Template_p_button_onClick_10_listener() {
      const department_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editDepartment(department_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 22);
    \u0275\u0275listener("onClick", function DepartmentsComponent_ng_template_8_Template_p_button_onClick_11_listener() {
      const department_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteDepartment(department_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const department_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", department_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(department_r6.departmentId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(department_r6.departmentName);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function DepartmentsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No departments found");
    \u0275\u0275elementEnd()();
  }
}
var DepartmentsComponent = class _DepartmentsComponent {
  userService;
  messageService;
  authService;
  table;
  departments = [];
  filteredDepartments = [];
  selectedDepartments = [];
  campuses = [];
  searchValue = "";
  loading = false;
  constructor(userService, messageService, authService) {
    this.userService = userService;
    this.messageService = messageService;
    this.authService = authService;
  }
  ngOnInit() {
    this.loadDepartments();
    this.loadCampuses();
  }
  loadDepartments() {
    this.loading = true;
    this.userService.getDepartments().subscribe({
      next: (response) => {
        this.departments = Array.isArray(response) ? response : response.data || [];
        this.filteredDepartments = [...this.departments];
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading departments:", error);
        import_sweetalert23.default.fire({
          title: "Error",
          text: "Failed to load departments: " + (error.error?.message || error.message),
          icon: "error"
        });
        this.loading = false;
      }
    });
  }
  loadCampuses() {
    this.userService.getCampuses().subscribe({
      next: (response) => {
        this.campuses = Array.isArray(response) ? response : response.data || [];
      },
      error: (error) => {
        console.error("Error loading campuses:", error);
      }
    });
  }
  filterDepartments() {
    if (!this.searchValue.trim()) {
      this.filteredDepartments = [...this.departments];
      return;
    }
    const search = this.searchValue.toLowerCase();
    this.filteredDepartments = this.departments.filter((dept) => dept.departmentName?.toLowerCase().includes(search) || dept.campus?.campusName?.toLowerCase().includes(search));
  }
  onSelectionChange(event) {
    if (this.selectedDepartments && this.selectedDepartments.length > 0) {
    }
  }
  viewDepartment(department) {
    const createdDate = new Date(department.departmentCreated).toLocaleDateString();
    const updatedDate = new Date(department.departmentUpdated).toLocaleDateString();
    import_sweetalert23.default.fire({
      title: department.departmentName,
      html: `
                <div style="text-align: left;">
                    <p><strong>Campus:</strong> ${department.campus?.campusName || "N/A"}</p>
                    <p><strong>Created:</strong> ${createdDate}</p>
                    <p><strong>Updated:</strong> ${updatedDate}</p>
                </div>
            `,
      icon: "info",
      confirmButtonText: "Close"
    });
  }
  editDepartment(department) {
    const editData = {
      departmentName: department.departmentName
    };
    import_sweetalert23.default.fire({
      title: "",
      titleText: "",
      html: `
                <div style="text-align: left; width: 100%; max-width: 500px; margin: 0 auto;">
                    <div style="background: #f5f5f5; color: #333; padding: 16px; margin: -16px -16px 16px -16px; border-radius: 8px 8px 0 0;">
                        <h2 style="margin: 0; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">\u270E Edit Department</h2>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Department Name *</label>
                            <input id="departmentName" type="text" value="${editData.departmentName}" placeholder="Department Name" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                    </div>
                </div>
            `,
      width: "550px",
      showCancelButton: true,
      confirmButtonText: "Update Department",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#667eea",
      cancelButtonColor: "#e0e0e0",
      didOpen: () => {
        const deptNameInput = document.getElementById("departmentName");
        if (deptNameInput)
          deptNameInput.focus();
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const departmentName = document.getElementById("departmentName").value.trim();
        if (!departmentName) {
          import_sweetalert23.default.fire({ title: "Error", text: "Department Name is required", icon: "error" });
          return;
        }
        const updatedData = {
          departmentName
        };
        this.userService.updateDepartment(department.departmentId, updatedData).subscribe({
          next: () => {
            import_sweetalert23.default.fire({
              title: "Success!",
              text: "Department updated successfully",
              icon: "success"
            });
            this.loadDepartments();
          },
          error: (error) => {
            import_sweetalert23.default.fire({
              title: "Error",
              text: "Failed to update department: " + (error.error?.message || error.message),
              icon: "error"
            });
          }
        });
      }
    });
  }
  deleteDepartment(department) {
    const departmentId = department.departmentId;
    import_sweetalert23.default.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this department?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d"
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteDepartment(departmentId).subscribe({
          next: () => {
            import_sweetalert23.default.fire({
              title: "Deleted!",
              text: "Department has been deleted successfully.",
              icon: "success"
            });
            this.loadDepartments();
          },
          error: (error) => {
            console.error("Error deleting department:", departmentId, error);
            import_sweetalert23.default.fire({
              title: "Error",
              text: "Failed to delete department: " + (error.error?.message || error.message),
              icon: "error"
            });
          }
        });
      }
    });
  }
  openNewDepartmentDialog() {
    import_sweetalert23.default.fire({
      title: "",
      titleText: "",
      html: `
                <div style="text-align: left; width: 100%; max-width: 500px; margin: 0 auto;">
                    <div style="background: #f5f5f5; color: #333; padding: 16px; margin: -16px -16px 16px -16px; border-radius: 8px 8px 0 0;">
                        <h2 style="margin: 0; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">\u2795 Add New Department</h2>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 12px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-weight: 500; margin-bottom: 6px; color: #555; font-size: 13px;">Department Name *</label>
                            <input id="newDepartmentName" type="text" placeholder="Department Name" style="width: 100%; padding: 8px 10px; border: none; border-bottom: 1.5px solid #e0e0e0; border-radius: 0; font-size: 13px; box-sizing: border-box; background: transparent;" onfocus="this.style.borderBottomColor='#667eea'" onblur="this.style.borderBottomColor='#e0e0e0'" />
                        </div>
                    </div>
                </div>
            `,
      width: "550px",
      showCancelButton: true,
      confirmButtonText: "Create Department",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#667eea",
      cancelButtonColor: "#e0e0e0",
      didOpen: () => {
        const deptNameInput = document.getElementById("newDepartmentName");
        if (deptNameInput)
          deptNameInput.focus();
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const departmentName = document.getElementById("newDepartmentName").value.trim();
        if (!departmentName) {
          import_sweetalert23.default.fire({ title: "Error", text: "Department Name is required", icon: "error" });
          return;
        }
        const newDepartmentPayload = {
          departmentName
        };
        this.userService.createDepartment(newDepartmentPayload).subscribe({
          next: () => {
            import_sweetalert23.default.fire({
              title: "Success!",
              text: "Department created successfully",
              icon: "success"
            });
            this.loadDepartments();
          },
          error: (error) => {
            import_sweetalert23.default.fire({
              title: "Error",
              text: "Failed to create department: " + (error.error?.message || error.message),
              icon: "error"
            });
          }
        });
      }
    });
  }
  deleteSelectedDepartments() {
    if (!this.selectedDepartments || this.selectedDepartments.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", detail: "Please select departments to delete" });
      return;
    }
    import_sweetalert23.default.fire({
      title: "Confirm Delete",
      text: `Are you sure you want to delete ${this.selectedDepartments.length} department(s)?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete All",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        let deletedCount = 0;
        let failedCount = 0;
        this.selectedDepartments.forEach((department) => {
          const departmentId = department.departmentId;
          this.userService.deleteDepartment(departmentId).subscribe({
            next: () => {
              deletedCount++;
              if (deletedCount + failedCount === this.selectedDepartments.length) {
                this.selectedDepartments = [];
                this.loadDepartments();
                import_sweetalert23.default.fire({
                  title: "Deleted!",
                  text: `${deletedCount} department(s) deleted successfully.`,
                  icon: "success"
                });
              }
            },
            error: (error) => {
              failedCount++;
              console.error(`Failed to delete department ${departmentId}:`, error);
              if (deletedCount + failedCount === this.selectedDepartments.length) {
                this.selectedDepartments = [];
                this.loadDepartments();
                import_sweetalert23.default.fire({
                  title: "Partial Delete",
                  text: `${deletedCount} department(s) deleted, ${failedCount} failed.`,
                  icon: "warning"
                });
              }
            }
          });
        });
      }
    });
  }
  exportCSV() {
    if (this.filteredDepartments.length === 0) {
      this.messageService.add({ severity: "warn", summary: "Warning", detail: "No data to export" });
      return;
    }
    const csv = this.generateCSV(this.filteredDepartments);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "departments_export.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.messageService.add({ severity: "success", summary: "Success", detail: "Departments exported to CSV" });
  }
  generateCSV(data) {
    const headers = ["Department Name", "Campus Name"];
    const rows = data.map((dept) => [dept.departmentName || "", dept.campus?.campusName || ""]);
    const csvContent = [headers.join(","), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n");
    return csvContent;
  }
  static \u0275fac = function DepartmentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DepartmentsComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentsComponent, selectors: [["app-departments"]], viewQuery: function DepartmentsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.table = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 10, vars: 11, consts: [["start", ""], ["end", ""], ["styleClass", "mb-4"], ["dataKey", "departmentId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} departments", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search departments...", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], [2, "min-width", "25rem"], ["pSortableColumn", "departmentName", 2, "min-width", "20rem"], ["field", "departmentName"], [2, "min-width", "12rem"], [3, "value"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "severity", "info", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", 3, "onClick", "rounded", "text"], ["colspan", "4", 1, "text-center", "py-5"]], template: function DepartmentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 2);
      \u0275\u0275template(2, DepartmentsComponent_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, DepartmentsComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275twoWayListener("selectionChange", function DepartmentsComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedDepartments, $event) || (ctx.selectedDepartments = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("selectionChange", function DepartmentsComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange($event));
      });
      \u0275\u0275template(7, DepartmentsComponent_ng_template_7_Template, 10, 0, "ng-template", 4)(8, DepartmentsComponent_ng_template_8_Template, 12, 9, "ng-template", 5)(9, DepartmentsComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filteredDepartments)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c13))("loading", ctx.loading)("rowHover", true);
      \u0275\u0275twoWayProperty("selection", ctx.selectedDepartments);
      \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c23));
    }
  }, dependencies: [CommonModule, CardModule, PrimeTemplate, ButtonModule, Button, TableModule, Table, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, InputTextModule, InputText, TooltipModule, ToolbarModule, Toolbar, ToastModule, Toast, IconFieldModule, IconField, InputIconModule, InputIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-start;\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: #f8f9fa;\n}\np-table[_ngcontent-%COMP%]     .p-input-icon-left > input {\n  padding-left: 2.5rem;\n}\np-table[_ngcontent-%COMP%]     .p-input-icon-left > .p-input-icon {\n  left: 0.75rem;\n}\n/*# sourceMappingURL=_departments.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentsComponent, [{
    type: Component,
    args: [{ selector: "app-departments", standalone: true, imports: [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule], providers: [MessageService], template: `
        <p-toast />

        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNewDepartmentDialog()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelectedDepartments()" [disabled]="!selectedDepartments.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filterDepartments()" placeholder="Search departments..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>

        <p-table
            [value]="filteredDepartments"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="departmentId"
            [(selection)]="selectedDepartments"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} departments"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="departmentName" style="min-width:20rem">Department <p-sortIcon field="departmentName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-department>
                <tr>
                    <td><p-tableCheckbox [value]="department" /></td>
                    <td>{{ department.departmentId }}</td>
                    <td>{{ department.departmentName }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="viewDepartment(department)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="editDepartment(department)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="deleteDepartment(department)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" class="text-center py-5">No departments found</td>
                </tr>
            </ng-template>
        </p-table>
    `, styles: ["/* src/assets/pages/_departments.scss */\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-start;\n}\n.action-buttons p-button:hover {\n  opacity: 0.8;\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: #f8f9fa;\n}\np-table ::ng-deep .p-input-icon-left > input {\n  padding-left: 2.5rem;\n}\np-table ::ng-deep .p-input-icon-left > .p-input-icon {\n  left: 0.75rem;\n}\n/*# sourceMappingURL=_departments.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: MessageService }, { type: AuthService }], { table: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentsComponent, { className: "DepartmentsComponent", filePath: "src/app/pages/departments/departments.ts", lineNumber: 89 });
})();

// src/app/pages/assetcategory/brand.ts
var import_sweetalert24 = __toESM(require_sweetalert2_all());
var _c04 = () => [10, 20, 30];
var _c14 = () => ({ "min-width": "70rem" });
function BrandComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 8);
    \u0275\u0275listener("onClick", function BrandComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 9);
    \u0275\u0275listener("onClick", function BrandComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelected());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedItems.length);
  }
}
function BrandComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function BrandComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 11);
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function BrandComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function BrandComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function BrandComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 13);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 14);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 15);
    \u0275\u0275text(6, "Brand ");
    \u0275\u0275element(7, "p-sortIcon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 17);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function BrandComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 19)(9, "p-button", 20);
    \u0275\u0275listener("onClick", function BrandComponent_ng_template_8_Template_p_button_onClick_9_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.view(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-button", 21);
    \u0275\u0275listener("onClick", function BrandComponent_ng_template_8_Template_p_button_onClick_10_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 22);
    \u0275\u0275listener("onClick", function BrandComponent_ng_template_8_Template_p_button_onClick_11_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(row_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.brandId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.brandName);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function BrandComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No brands found");
    \u0275\u0275elementEnd()();
  }
}
var BrandComponent = class _BrandComponent {
  userService;
  messageService;
  assetService;
  items = [];
  filteredItems = [];
  selectedItems = [];
  searchValue = "";
  loading = true;
  constructor(userService, messageService, assetService) {
    this.userService = userService;
    this.messageService = messageService;
    this.assetService = assetService;
  }
  ngOnInit() {
    this.loadItems();
  }
  loadItems() {
    this.loading = true;
    this.assetService.getBrands().subscribe({
      next: (data) => {
        this.items = data || [];
        this.filteredItems = [...this.items];
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading brands:", error);
        this.messageService.add({ severity: "error", summary: "Error", detail: "Failed to load brands" });
        this.loading = false;
      }
    });
  }
  filter() {
    this.filteredItems = this.items.filter((item) => item.brandName?.toLowerCase().includes(this.searchValue.toLowerCase()));
  }
  onSelectionChange(event) {
  }
  openNewDialog() {
    import_sweetalert24.default.fire({
      title: "New Brand",
      html: `<input type="text" id="brandName" class="swal2-input" placeholder="Brand Name" />`,
      confirmButtonText: "Create",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      preConfirm: () => {
        const brandName = document.getElementById("brandName")?.value.trim();
        if (!brandName) {
          import_sweetalert24.default.showValidationMessage("Brand name is required");
          return false;
        }
        return { brandName };
      }
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        this.assetService.createBrand(result.value).subscribe({
          next: (created) => {
            this.items.push(created);
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Created", detail: "Brand created" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Create failed" })
        });
      }
    });
  }
  view(item) {
    import_sweetalert24.default.fire({ title: "Brand", html: `<strong>Name:</strong> ${item.brandName}`, icon: "info" });
  }
  edit(item) {
    import_sweetalert24.default.fire({
      title: "Edit Brand",
      html: `<input type="text" id="brandName" class="swal2-input" value="${item.brandName}" />`,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      preConfirm: () => {
        const brandName = document.getElementById("brandName")?.value.trim();
        if (!brandName) {
          import_sweetalert24.default.showValidationMessage("Brand name is required");
          return false;
        }
        return { brandName };
      }
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        this.assetService.updateBrand(item.brandId, result.value).subscribe({
          next: (updated) => {
            const idx = this.items.findIndex((b) => b.brandId === updated.brandId);
            if (idx > -1)
              this.items[idx] = updated;
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Updated", detail: "Brand updated" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Update failed" })
        });
      }
    });
  }
  delete(item) {
    import_sweetalert24.default.fire({
      title: "Delete Brand",
      text: `Delete "${item.brandName}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((result) => {
      if (result.isConfirmed) {
        this.assetService.deleteBrand(item.brandId).subscribe({
          next: () => {
            this.items = this.items.filter((b) => b.brandId !== item.brandId);
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Deleted", detail: "Brand deleted" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Delete failed" })
        });
      }
    });
  }
  deleteSelected() {
    if (!this.selectedItems?.length)
      return;
    import_sweetalert24.default.fire({
      title: "Delete Selected",
      text: `Delete ${this.selectedItems.length} brand(s)?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((res) => {
      if (res.isConfirmed) {
        const ids = this.selectedItems.map((b) => b.brandId);
        Promise.all(ids.map((id) => this.assetService.deleteBrand(id).toPromise())).then(() => {
          this.items = this.items.filter((b) => !ids.includes(b.brandId));
          this.filteredItems = [...this.items];
          this.selectedItems = [];
          this.messageService.add({ severity: "success", summary: "Deleted", detail: "Selected brands deleted" });
        }).catch(() => this.messageService.add({ severity: "error", summary: "Error", detail: "Bulk delete failed" }));
      }
    });
  }
  exportCSV() {
    let csv = "Brand Name,ID\n";
    this.items.forEach((item) => {
      csv += `${(item.brandName || "").replace(/,/g, ";")},${item.brandId}
`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "brands.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function BrandComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrandComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AssetService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrandComponent, selectors: [["app-brand"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 10, vars: 11, consts: [["start", ""], ["end", ""], ["styleClass", "mb-4"], ["dataKey", "brandId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} brands", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search brands...", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], [2, "min-width", "25rem"], ["pSortableColumn", "brandName", 2, "min-width", "20rem"], ["field", "brandName"], [2, "min-width", "12rem"], [3, "value"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "severity", "info", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", 3, "onClick", "rounded", "text"], ["colspan", "4", 1, "text-center", "py-5"]], template: function BrandComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 2);
      \u0275\u0275template(2, BrandComponent_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, BrandComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275twoWayListener("selectionChange", function BrandComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedItems, $event) || (ctx.selectedItems = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("selectionChange", function BrandComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange($event));
      });
      \u0275\u0275template(7, BrandComponent_ng_template_7_Template, 10, 0, "ng-template", 4)(8, BrandComponent_ng_template_8_Template, 12, 9, "ng-template", 5)(9, BrandComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filteredItems)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c04))("loading", ctx.loading)("rowHover", true);
      \u0275\u0275twoWayProperty("selection", ctx.selectedItems);
      \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c14));
    }
  }, dependencies: [CommonModule, CardModule, PrimeTemplate, ButtonModule, Button, TableModule, Table, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, InputTextModule, InputText, TooltipModule, ToolbarModule, Toolbar, ToastModule, Toast, IconFieldModule, IconField, InputIconModule, InputIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%] {\n  margin: 0;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem;\n  background-color: var(--primary-color);\n  color: var(--primary-contrast-color);\n  font-weight: 600;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-hover);\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1rem;\n  vertical-align: middle;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-emptymessage > tr > td {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\np-table[_ngcontent-%COMP%]     .p-paginator {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n}\np-toolbar[_ngcontent-%COMP%]     .p-toolbar {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  margin-bottom: 1.5rem;\n}\np-toolbar[_ngcontent-%COMP%]     .p-toolbar .p-toolbar-group-start, \np-toolbar[_ngcontent-%COMP%]     .p-toolbar .p-toolbar-group-end {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\np-tooltip[_ngcontent-%COMP%]     .p-tooltip {\n  background-color: var(--surface-overlay);\n  color: var(--text-color);\n  border: 1px solid var(--surface-border);\n}\np-iconfield[_ngcontent-%COMP%]     input {\n  width: 250px;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background-color: var(--surface-card);\n  color: var(--text-color);\n  transition: border-color var(--element-transition-duration);\n}\np-iconfield[_ngcontent-%COMP%]     input:focus {\n  border-color: var(--primary-color);\n  outline: none;\n}\np-iconfield[_ngcontent-%COMP%]     input::placeholder {\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=_assetcategory.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrandComponent, [{
    type: Component,
    args: [{ selector: "app-brand", standalone: true, imports: [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule], providers: [MessageService], template: `
        <p-toast />
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNewDialog()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selectedItems.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search brands..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            [value]="filteredItems"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="brandId"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} brands"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="brandName" style="min-width:20rem">Brand <p-sortIcon field="brandName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.brandId }}</td>
                    <td>{{ row.brandName }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(row)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" class="text-center py-5">No brands found</td>
                </tr>
            </ng-template>
        </p-table>
    `, styles: ["/* src/assets/pages/_assetcategory.scss */\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.action-buttons p-button {\n  margin: 0;\n}\np-table ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem;\n  background-color: var(--primary-color);\n  color: var(--primary-contrast-color);\n  font-weight: 600;\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-hover);\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1rem;\n  vertical-align: middle;\n}\np-table ::ng-deep .p-datatable .p-datatable-emptymessage > tr > td {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\np-table ::ng-deep .p-paginator {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n}\np-toolbar ::ng-deep .p-toolbar {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  margin-bottom: 1.5rem;\n}\np-toolbar ::ng-deep .p-toolbar .p-toolbar-group-start,\np-toolbar ::ng-deep .p-toolbar .p-toolbar-group-end {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\np-tooltip ::ng-deep .p-tooltip {\n  background-color: var(--surface-overlay);\n  color: var(--text-color);\n  border: 1px solid var(--surface-border);\n}\np-iconfield ::ng-deep input {\n  width: 250px;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background-color: var(--surface-card);\n  color: var(--text-color);\n  transition: border-color var(--element-transition-duration);\n}\np-iconfield ::ng-deep input:focus {\n  border-color: var(--primary-color);\n  outline: none;\n}\np-iconfield ::ng-deep input::placeholder {\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=_assetcategory.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: MessageService }, { type: AssetService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandComponent, { className: "BrandComponent", filePath: "src/app/pages/assetcategory/brand.ts", lineNumber: 87 });
})();

// src/app/pages/assetcategory/color.ts
var import_sweetalert25 = __toESM(require_sweetalert2_all());
var _c05 = () => [10, 20, 30];
var _c15 = () => ({ "min-width": "70rem" });
function ColorComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 8);
    \u0275\u0275listener("onClick", function ColorComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 9);
    \u0275\u0275listener("onClick", function ColorComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelected());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedItems.length);
  }
}
function ColorComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function ColorComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 11);
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ColorComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ColorComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function ColorComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 13);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 14);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 15);
    \u0275\u0275text(6, "Color ");
    \u0275\u0275element(7, "p-sortIcon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 17);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function ColorComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 19)(9, "p-button", 20);
    \u0275\u0275listener("onClick", function ColorComponent_ng_template_8_Template_p_button_onClick_9_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.view(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-button", 21);
    \u0275\u0275listener("onClick", function ColorComponent_ng_template_8_Template_p_button_onClick_10_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 22);
    \u0275\u0275listener("onClick", function ColorComponent_ng_template_8_Template_p_button_onClick_11_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(row_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.colorId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.colorName);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function ColorComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No colors found");
    \u0275\u0275elementEnd()();
  }
}
var ColorComponent = class _ColorComponent {
  userService;
  messageService;
  assetService;
  items = [];
  filteredItems = [];
  selectedItems = [];
  searchValue = "";
  loading = true;
  constructor(userService, messageService, assetService) {
    this.userService = userService;
    this.messageService = messageService;
    this.assetService = assetService;
  }
  ngOnInit() {
    this.loadItems();
  }
  loadItems() {
    this.loading = true;
    this.assetService.getColors().subscribe({
      next: (data) => {
        this.items = data || [];
        this.filteredItems = [...this.items];
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading colors:", error);
        this.messageService.add({ severity: "error", summary: "Error", detail: "Failed to load colors" });
        this.loading = false;
      }
    });
  }
  filter() {
    this.filteredItems = this.items.filter((item) => item.colorName?.toLowerCase().includes(this.searchValue.toLowerCase()));
  }
  onSelectionChange(event) {
  }
  openNewDialog() {
    import_sweetalert25.default.fire({
      title: "New Color",
      html: `<input type="text" id="colorName" class="swal2-input" placeholder="Color Name" />`,
      confirmButtonText: "Create",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      preConfirm: () => {
        const colorName = document.getElementById("colorName")?.value.trim();
        if (!colorName) {
          import_sweetalert25.default.showValidationMessage("Color name is required");
          return false;
        }
        return { colorName };
      }
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        console.log("Creating color with data:", result.value);
        this.assetService.createColor(result.value).subscribe({
          next: (created) => {
            console.log("Color created successfully:", created);
            this.items.push(created);
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Created", detail: "Color created" });
          },
          error: (error) => {
            console.error("Error creating color:", error);
            const errorMsg = error?.error?.message || error?.message || "Create failed";
            this.messageService.add({ severity: "error", summary: "Error", detail: errorMsg });
          }
        });
      }
    });
  }
  view(item) {
    import_sweetalert25.default.fire({ title: "Color", html: `<strong>Name:</strong> ${item.colorName}`, icon: "info" });
  }
  edit(item) {
    import_sweetalert25.default.fire({
      title: "Edit Color",
      html: `<input type="text" id="colorName" class="swal2-input" value="${item.colorName}" />`,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      preConfirm: () => {
        const colorName = document.getElementById("colorName")?.value.trim();
        if (!colorName) {
          import_sweetalert25.default.showValidationMessage("Color name is required");
          return false;
        }
        return { colorName };
      }
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        this.assetService.updateColor(item.colorId, result.value).subscribe({
          next: (updated) => {
            const idx = this.items.findIndex((c) => c.colorId === updated.colorId);
            if (idx > -1)
              this.items[idx] = updated;
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Updated", detail: "Color updated" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Update failed" })
        });
      }
    });
  }
  delete(item) {
    import_sweetalert25.default.fire({
      title: "Delete Color",
      text: `Delete "${item.colorName}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((res) => {
      if (res.isConfirmed) {
        this.assetService.deleteColor(item.colorId).subscribe({
          next: () => {
            this.items = this.items.filter((c) => c.colorId !== item.colorId);
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Deleted", detail: "Color deleted" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Delete failed" })
        });
      }
    });
  }
  deleteSelected() {
    if (!this.selectedItems?.length)
      return;
    import_sweetalert25.default.fire({
      title: "Delete Selected",
      text: `Delete ${this.selectedItems.length} color(s)?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((res) => {
      if (res.isConfirmed) {
        const ids = this.selectedItems.map((c) => c.colorId);
        Promise.all(ids.map((id) => this.assetService.deleteColor(id).toPromise())).then(() => {
          this.items = this.items.filter((c) => !ids.includes(c.colorId));
          this.filteredItems = [...this.items];
          this.selectedItems = [];
          this.messageService.add({ severity: "success", summary: "Deleted", detail: "Selected colors deleted" });
        }).catch(() => this.messageService.add({ severity: "error", summary: "Error", detail: "Bulk delete failed" }));
      }
    });
  }
  exportCSV() {
    let csv = "Color Name,ID\n";
    this.items.forEach((item) => {
      csv += `${(item.colorName || "").replace(/,/g, ";")},${item.colorId}
`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "colors.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function ColorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColorComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AssetService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColorComponent, selectors: [["app-color"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 10, vars: 11, consts: [["start", ""], ["end", ""], ["styleClass", "mb-4"], ["dataKey", "colorId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} colors", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search colors...", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], [2, "min-width", "25rem"], ["pSortableColumn", "colorName", 2, "min-width", "20rem"], ["field", "colorName"], [2, "min-width", "12rem"], [3, "value"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "severity", "info", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", 3, "onClick", "rounded", "text"], ["colspan", "4", 1, "text-center", "py-5"]], template: function ColorComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 2);
      \u0275\u0275template(2, ColorComponent_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, ColorComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275twoWayListener("selectionChange", function ColorComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedItems, $event) || (ctx.selectedItems = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("selectionChange", function ColorComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange($event));
      });
      \u0275\u0275template(7, ColorComponent_ng_template_7_Template, 10, 0, "ng-template", 4)(8, ColorComponent_ng_template_8_Template, 12, 9, "ng-template", 5)(9, ColorComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filteredItems)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c05))("loading", ctx.loading)("rowHover", true);
      \u0275\u0275twoWayProperty("selection", ctx.selectedItems);
      \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c15));
    }
  }, dependencies: [CommonModule, CardModule, PrimeTemplate, ButtonModule, Button, TableModule, Table, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, InputTextModule, InputText, TooltipModule, ToolbarModule, Toolbar, ToastModule, Toast, IconFieldModule, IconField, InputIconModule, InputIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%] {\n  margin: 0;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem;\n  background-color: var(--primary-color);\n  color: var(--primary-contrast-color);\n  font-weight: 600;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-hover);\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1rem;\n  vertical-align: middle;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-emptymessage > tr > td {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\np-table[_ngcontent-%COMP%]     .p-paginator {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n}\np-toolbar[_ngcontent-%COMP%]     .p-toolbar {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  margin-bottom: 1.5rem;\n}\np-toolbar[_ngcontent-%COMP%]     .p-toolbar .p-toolbar-group-start, \np-toolbar[_ngcontent-%COMP%]     .p-toolbar .p-toolbar-group-end {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\np-tooltip[_ngcontent-%COMP%]     .p-tooltip {\n  background-color: var(--surface-overlay);\n  color: var(--text-color);\n  border: 1px solid var(--surface-border);\n}\np-iconfield[_ngcontent-%COMP%]     input {\n  width: 250px;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background-color: var(--surface-card);\n  color: var(--text-color);\n  transition: border-color var(--element-transition-duration);\n}\np-iconfield[_ngcontent-%COMP%]     input:focus {\n  border-color: var(--primary-color);\n  outline: none;\n}\np-iconfield[_ngcontent-%COMP%]     input::placeholder {\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=_assetcategory.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorComponent, [{
    type: Component,
    args: [{ selector: "app-color", standalone: true, imports: [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule], providers: [MessageService], template: `
        <p-toast />
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNewDialog()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selectedItems.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search colors..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            [value]="filteredItems"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="colorId"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} colors"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="colorName" style="min-width:20rem">Color <p-sortIcon field="colorName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.colorId }}</td>
                    <td>{{ row.colorName }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(row)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" class="text-center py-5">No colors found</td>
                </tr>
            </ng-template>
        </p-table>
    `, styles: ["/* src/assets/pages/_assetcategory.scss */\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.action-buttons p-button {\n  margin: 0;\n}\np-table ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem;\n  background-color: var(--primary-color);\n  color: var(--primary-contrast-color);\n  font-weight: 600;\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-hover);\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1rem;\n  vertical-align: middle;\n}\np-table ::ng-deep .p-datatable .p-datatable-emptymessage > tr > td {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\np-table ::ng-deep .p-paginator {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n}\np-toolbar ::ng-deep .p-toolbar {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  margin-bottom: 1.5rem;\n}\np-toolbar ::ng-deep .p-toolbar .p-toolbar-group-start,\np-toolbar ::ng-deep .p-toolbar .p-toolbar-group-end {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\np-tooltip ::ng-deep .p-tooltip {\n  background-color: var(--surface-overlay);\n  color: var(--text-color);\n  border: 1px solid var(--surface-border);\n}\np-iconfield ::ng-deep input {\n  width: 250px;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background-color: var(--surface-card);\n  color: var(--text-color);\n  transition: border-color var(--element-transition-duration);\n}\np-iconfield ::ng-deep input:focus {\n  border-color: var(--primary-color);\n  outline: none;\n}\np-iconfield ::ng-deep input::placeholder {\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=_assetcategory.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: MessageService }, { type: AssetService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColorComponent, { className: "ColorComponent", filePath: "src/app/pages/assetcategory/color.ts", lineNumber: 87 });
})();

// src/app/pages/assetcategory/status.ts
var import_sweetalert26 = __toESM(require_sweetalert2_all());
var _c06 = () => [10, 20, 30];
var _c16 = () => ({ "min-width": "70rem" });
function StatusComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 8);
    \u0275\u0275listener("onClick", function StatusComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 9);
    \u0275\u0275listener("onClick", function StatusComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelected());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedItems.length);
  }
}
function StatusComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function StatusComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 11);
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function StatusComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function StatusComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function StatusComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 13);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 14);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 15);
    \u0275\u0275text(6, "Status ");
    \u0275\u0275element(7, "p-sortIcon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 17);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function StatusComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 19)(9, "p-button", 20);
    \u0275\u0275listener("onClick", function StatusComponent_ng_template_8_Template_p_button_onClick_9_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.view(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-button", 21);
    \u0275\u0275listener("onClick", function StatusComponent_ng_template_8_Template_p_button_onClick_10_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 22);
    \u0275\u0275listener("onClick", function StatusComponent_ng_template_8_Template_p_button_onClick_11_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(row_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.statusId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.statusName);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function StatusComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No statuses found");
    \u0275\u0275elementEnd()();
  }
}
var StatusComponent = class _StatusComponent {
  messageService;
  assetService;
  items = [];
  filteredItems = [];
  selectedItems = [];
  searchValue = "";
  loading = true;
  constructor(messageService, assetService) {
    this.messageService = messageService;
    this.assetService = assetService;
  }
  ngOnInit() {
    this.loadItems();
  }
  loadItems() {
    this.loading = true;
    this.assetService.getStatuses().subscribe({
      next: (data) => {
        if (data && data.length > 0) {
        }
        this.items = data || [];
        this.filteredItems = [...this.items];
        this.loading = false;
      },
      error: (error) => {
        console.error("\u274C Error loading statuses:", error);
        console.error("\u{1F6A8} Error status code:", error?.status);
        console.error("\u{1F4AC} Error message:", error?.message);
        console.error("\u{1F4DD} Error details:", error?.error);
        this.messageService.add({ severity: "error", summary: "Error", detail: "Failed to load statuses: " + (error?.error?.message || error?.message) });
        this.loading = false;
      }
    });
  }
  filter() {
    this.filteredItems = this.items.filter((item) => item.statusName?.toLowerCase().includes(this.searchValue.toLowerCase()));
  }
  onSelectionChange(event) {
  }
  openNewDialog() {
    import_sweetalert26.default.fire({
      title: "New Status",
      html: `<input type="text" id="statusName" class="swal2-input" placeholder="Status Name" />`,
      confirmButtonText: "Create",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      preConfirm: () => {
        const statusName = document.getElementById("statusName")?.value.trim();
        if (!statusName) {
          import_sweetalert26.default.showValidationMessage("Status name is required");
          return false;
        }
        return { statusName };
      }
    }).then((res) => {
      if (res.isConfirmed && res.value) {
        this.assetService.createStatus(res.value).subscribe({
          next: (created) => {
            this.items.push(created);
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Created", detail: "Status created" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Create failed" })
        });
      }
    });
  }
  view(item) {
    import_sweetalert26.default.fire({
      title: "View Status",
      html: `
                <div style="text-align: left;">
                    <p><strong>Status Name:</strong> ${item.statusName}</p>
                </div>
            `,
      icon: "info"
    });
  }
  edit(item) {
    import_sweetalert26.default.fire({
      title: "Edit Status",
      html: `<input type="text" id="statusName" class="swal2-input" value="${item.statusName}" />`,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      preConfirm: () => {
        const statusName = document.getElementById("statusName")?.value.trim();
        if (!statusName) {
          import_sweetalert26.default.showValidationMessage("Status name is required");
          return false;
        }
        return { statusName };
      }
    }).then((res) => {
      if (res.isConfirmed && res.value) {
        this.assetService.updateStatus(item.statusId, res.value).subscribe({
          next: (updated) => {
            const idx = this.items.findIndex((s) => s.statusId === updated.statusId);
            if (idx > -1)
              this.items[idx] = updated;
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Updated", detail: "Status updated" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Update failed" })
        });
      }
    });
  }
  delete(item) {
    import_sweetalert26.default.fire({
      title: "Delete Status",
      text: `Delete "${item.statusName}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((res) => {
      if (res.isConfirmed) {
        this.assetService.deleteStatus(item.statusId).subscribe({
          next: () => {
            this.items = this.items.filter((s) => s.statusId !== item.statusId);
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Deleted", detail: "Status deleted" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Delete failed" })
        });
      }
    });
  }
  deleteSelected() {
    if (!this.selectedItems?.length)
      return;
    import_sweetalert26.default.fire({
      title: "Delete Selected",
      text: `Delete ${this.selectedItems.length} status(es)?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((res) => {
      if (res.isConfirmed) {
        const ids = this.selectedItems.map((s) => s.statusId);
        Promise.all(ids.map((id) => this.assetService.deleteStatus(id).toPromise())).then(() => {
          this.items = this.items.filter((s) => !ids.includes(s.statusId));
          this.filteredItems = [...this.items];
          this.selectedItems = [];
          this.messageService.add({ severity: "success", summary: "Deleted", detail: "Selected statuses deleted" });
        }).catch(() => this.messageService.add({ severity: "error", summary: "Error", detail: "Bulk delete failed" }));
      }
    });
  }
  exportCSV() {
    let csv = "Status Name,ID\n";
    this.items.forEach((item) => {
      csv += `${(item.statusName || "").replace(/,/g, ";")},${item.statusId}
`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "statuses.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function StatusComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatusComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AssetService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusComponent, selectors: [["app-status"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 10, vars: 11, consts: [["start", ""], ["end", ""], ["styleClass", "mb-4"], ["dataKey", "statusId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} statuses", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search statuses...", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], [2, "min-width", "25rem"], ["pSortableColumn", "statusName", 2, "min-width", "20rem"], ["field", "statusName"], [2, "min-width", "12rem"], [3, "value"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "severity", "info", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", 3, "onClick", "rounded", "text"], ["colspan", "4", 1, "text-center", "py-5"]], template: function StatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 2);
      \u0275\u0275template(2, StatusComponent_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, StatusComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275twoWayListener("selectionChange", function StatusComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedItems, $event) || (ctx.selectedItems = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("selectionChange", function StatusComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange($event));
      });
      \u0275\u0275template(7, StatusComponent_ng_template_7_Template, 10, 0, "ng-template", 4)(8, StatusComponent_ng_template_8_Template, 12, 9, "ng-template", 5)(9, StatusComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filteredItems)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c06))("loading", ctx.loading)("rowHover", true);
      \u0275\u0275twoWayProperty("selection", ctx.selectedItems);
      \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c16));
    }
  }, dependencies: [CommonModule, CardModule, PrimeTemplate, ButtonModule, Button, TableModule, Table, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, InputTextModule, InputText, TooltipModule, ToolbarModule, Toolbar, ToastModule, Toast, IconFieldModule, IconField, InputIconModule, InputIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%] {\n  margin: 0;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem;\n  background-color: var(--primary-color);\n  color: var(--primary-contrast-color);\n  font-weight: 600;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-hover);\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1rem;\n  vertical-align: middle;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-emptymessage > tr > td {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\np-table[_ngcontent-%COMP%]     .p-paginator {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n}\np-toolbar[_ngcontent-%COMP%]     .p-toolbar {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  margin-bottom: 1.5rem;\n}\np-toolbar[_ngcontent-%COMP%]     .p-toolbar .p-toolbar-group-start, \np-toolbar[_ngcontent-%COMP%]     .p-toolbar .p-toolbar-group-end {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\np-tooltip[_ngcontent-%COMP%]     .p-tooltip {\n  background-color: var(--surface-overlay);\n  color: var(--text-color);\n  border: 1px solid var(--surface-border);\n}\np-iconfield[_ngcontent-%COMP%]     input {\n  width: 250px;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background-color: var(--surface-card);\n  color: var(--text-color);\n  transition: border-color var(--element-transition-duration);\n}\np-iconfield[_ngcontent-%COMP%]     input:focus {\n  border-color: var(--primary-color);\n  outline: none;\n}\np-iconfield[_ngcontent-%COMP%]     input::placeholder {\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=_assetcategory.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusComponent, [{
    type: Component,
    args: [{ selector: "app-status", standalone: true, imports: [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule], providers: [MessageService], template: `
        <p-toast />
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNewDialog()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selectedItems.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search statuses..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            [value]="filteredItems"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="statusId"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} statuses"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="statusName" style="min-width:20rem">Status <p-sortIcon field="statusName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.statusId }}</td>
                    <td>{{ row.statusName }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(row)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" class="text-center py-5">No statuses found</td>
                </tr>
            </ng-template>
        </p-table>
    `, styles: ["/* src/assets/pages/_assetcategory.scss */\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.action-buttons p-button {\n  margin: 0;\n}\np-table ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem;\n  background-color: var(--primary-color);\n  color: var(--primary-contrast-color);\n  font-weight: 600;\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-hover);\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1rem;\n  vertical-align: middle;\n}\np-table ::ng-deep .p-datatable .p-datatable-emptymessage > tr > td {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\np-table ::ng-deep .p-paginator {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n}\np-toolbar ::ng-deep .p-toolbar {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  margin-bottom: 1.5rem;\n}\np-toolbar ::ng-deep .p-toolbar .p-toolbar-group-start,\np-toolbar ::ng-deep .p-toolbar .p-toolbar-group-end {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\np-tooltip ::ng-deep .p-tooltip {\n  background-color: var(--surface-overlay);\n  color: var(--text-color);\n  border: 1px solid var(--surface-border);\n}\np-iconfield ::ng-deep input {\n  width: 250px;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background-color: var(--surface-card);\n  color: var(--text-color);\n  transition: border-color var(--element-transition-duration);\n}\np-iconfield ::ng-deep input:focus {\n  border-color: var(--primary-color);\n  outline: none;\n}\np-iconfield ::ng-deep input::placeholder {\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=_assetcategory.css.map */\n"] }]
  }], () => [{ type: MessageService }, { type: AssetService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusComponent, { className: "StatusComponent", filePath: "src/app/pages/assetcategory/status.ts", lineNumber: 86 });
})();

// src/app/pages/assetcategory/program.ts
var import_sweetalert27 = __toESM(require_sweetalert2_all());
var _c07 = () => [10, 20, 30];
var _c17 = () => ({ "min-width": "70rem" });
function ProgramComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 8);
    \u0275\u0275listener("onClick", function ProgramComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 9);
    \u0275\u0275listener("onClick", function ProgramComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelected());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedItems.length);
  }
}
function ProgramComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function ProgramComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 11);
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ProgramComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ProgramComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function ProgramComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 13);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 14);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 15);
    \u0275\u0275text(6, "Program ");
    \u0275\u0275element(7, "p-sortIcon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 17);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function ProgramComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 19)(9, "p-button", 20);
    \u0275\u0275listener("onClick", function ProgramComponent_ng_template_8_Template_p_button_onClick_9_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.view(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-button", 21);
    \u0275\u0275listener("onClick", function ProgramComponent_ng_template_8_Template_p_button_onClick_10_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 22);
    \u0275\u0275listener("onClick", function ProgramComponent_ng_template_8_Template_p_button_onClick_11_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(row_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.programId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.programName);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function ProgramComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No programs found");
    \u0275\u0275elementEnd()();
  }
}
var ProgramComponent = class _ProgramComponent {
  userService;
  messageService;
  assetService;
  items = [];
  filteredItems = [];
  selectedItems = [];
  searchValue = "";
  loading = true;
  constructor(userService, messageService, assetService) {
    this.userService = userService;
    this.messageService = messageService;
    this.assetService = assetService;
  }
  ngOnInit() {
    this.loadItems();
  }
  loadItems() {
    this.loading = true;
    this.assetService.getPrograms().subscribe({
      next: (data) => {
        this.items = data || [];
        this.filteredItems = [...this.items];
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading programs:", error);
        this.messageService.add({ severity: "error", summary: "Error", detail: "Failed to load programs" });
        this.loading = false;
      }
    });
  }
  filter() {
    this.filteredItems = this.items.filter((item) => item.programName?.toLowerCase().includes(this.searchValue.toLowerCase()));
  }
  onSelectionChange(event) {
  }
  openNewDialog() {
    import_sweetalert27.default.fire({
      title: "New Program",
      html: `<input type="text" id="programName" class="swal2-input" placeholder="Program Name" />`,
      confirmButtonText: "Create",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      preConfirm: () => {
        const programName = document.getElementById("programName")?.value.trim();
        if (!programName) {
          import_sweetalert27.default.showValidationMessage("Program name is required");
          return false;
        }
        return { programName };
      }
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        this.assetService.createProgram(result.value).subscribe({
          next: (created) => {
            this.items.push(created);
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Created", detail: "Program created" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Create failed" })
        });
      }
    });
  }
  view(item) {
    import_sweetalert27.default.fire({ title: "Program", html: `<strong>Name:</strong> ${item.programName}`, icon: "info" });
  }
  edit(item) {
    import_sweetalert27.default.fire({
      title: "Edit Program",
      html: `<input type="text" id="programName" class="swal2-input" value="${item.programName}" />`,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
      showCancelButton: true,
      preConfirm: () => {
        const programName = document.getElementById("programName")?.value.trim();
        if (!programName) {
          import_sweetalert27.default.showValidationMessage("Program name is required");
          return false;
        }
        return { programName };
      }
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        this.assetService.updateProgram(item.programId, result.value).subscribe({
          next: (updated) => {
            const idx = this.items.findIndex((p) => p.programId === updated.programId);
            if (idx > -1)
              this.items[idx] = updated;
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Updated", detail: "Program updated" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Update failed" })
        });
      }
    });
  }
  delete(item) {
    import_sweetalert27.default.fire({
      title: "Delete Program",
      text: `Delete "${item.programName}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((result) => {
      if (result.isConfirmed) {
        this.assetService.deleteProgram(item.programId).subscribe({
          next: () => {
            this.items = this.items.filter((p) => p.programId !== item.programId);
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Deleted", detail: "Program deleted" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Delete failed" })
        });
      }
    });
  }
  deleteSelected() {
    if (!this.selectedItems?.length)
      return;
    import_sweetalert27.default.fire({
      title: "Delete Selected",
      text: `Delete ${this.selectedItems.length} program(s)?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((res) => {
      if (res.isConfirmed) {
        const ids = this.selectedItems.map((p) => p.programId);
        Promise.all(ids.map((id) => this.assetService.deleteProgram(id).toPromise())).then(() => {
          this.items = this.items.filter((p) => !ids.includes(p.programId));
          this.filteredItems = [...this.items];
          this.selectedItems = [];
          this.messageService.add({ severity: "success", summary: "Deleted", detail: "Selected programs deleted" });
        }).catch(() => this.messageService.add({ severity: "error", summary: "Error", detail: "Bulk delete failed" }));
      }
    });
  }
  exportCSV() {
    let csv = "Program Name,ID\n";
    this.items.forEach((item) => {
      csv += `${(item.programName || "").replace(/,/g, ";")},${item.programId}
`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "programs.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function ProgramComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgramComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AssetService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgramComponent, selectors: [["app-program"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 10, vars: 11, consts: [["start", ""], ["end", ""], ["styleClass", "mb-4"], ["dataKey", "programId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} programs", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search programs...", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], [2, "min-width", "25rem"], ["pSortableColumn", "programName", 2, "min-width", "20rem"], ["field", "programName"], [2, "min-width", "12rem"], [3, "value"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "severity", "info", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", 3, "onClick", "rounded", "text"], ["colspan", "4", 1, "text-center", "py-5"]], template: function ProgramComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 2);
      \u0275\u0275template(2, ProgramComponent_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, ProgramComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275twoWayListener("selectionChange", function ProgramComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedItems, $event) || (ctx.selectedItems = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("selectionChange", function ProgramComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange($event));
      });
      \u0275\u0275template(7, ProgramComponent_ng_template_7_Template, 10, 0, "ng-template", 4)(8, ProgramComponent_ng_template_8_Template, 12, 9, "ng-template", 5)(9, ProgramComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filteredItems)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c07))("loading", ctx.loading)("rowHover", true);
      \u0275\u0275twoWayProperty("selection", ctx.selectedItems);
      \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c17));
    }
  }, dependencies: [CommonModule, CardModule, PrimeTemplate, ButtonModule, Button, TableModule, Table, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, InputTextModule, InputText, TooltipModule, ToolbarModule, Toolbar, ToastModule, Toast, IconFieldModule, IconField, InputIconModule, InputIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%] {\n  margin: 0;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem;\n  background-color: var(--primary-color);\n  color: var(--primary-contrast-color);\n  font-weight: 600;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-hover);\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1rem;\n  vertical-align: middle;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-emptymessage > tr > td {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\np-table[_ngcontent-%COMP%]     .p-paginator {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n}\np-toolbar[_ngcontent-%COMP%]     .p-toolbar {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  margin-bottom: 1.5rem;\n}\np-toolbar[_ngcontent-%COMP%]     .p-toolbar .p-toolbar-group-start, \np-toolbar[_ngcontent-%COMP%]     .p-toolbar .p-toolbar-group-end {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\np-tooltip[_ngcontent-%COMP%]     .p-tooltip {\n  background-color: var(--surface-overlay);\n  color: var(--text-color);\n  border: 1px solid var(--surface-border);\n}\np-iconfield[_ngcontent-%COMP%]     input {\n  width: 250px;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background-color: var(--surface-card);\n  color: var(--text-color);\n  transition: border-color var(--element-transition-duration);\n}\np-iconfield[_ngcontent-%COMP%]     input:focus {\n  border-color: var(--primary-color);\n  outline: none;\n}\np-iconfield[_ngcontent-%COMP%]     input::placeholder {\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=_assetcategory.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgramComponent, [{
    type: Component,
    args: [{ selector: "app-program", standalone: true, imports: [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule], providers: [MessageService], template: `
        <p-toast />
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNewDialog()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selectedItems.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search programs..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            [value]="filteredItems"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="programId"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} programs"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="programName" style="min-width:20rem">Program <p-sortIcon field="programName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.programId }}</td>
                    <td>{{ row.programName }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(row)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" class="text-center py-5">No programs found</td>
                </tr>
            </ng-template>
        </p-table>
    `, styles: ["/* src/assets/pages/_assetcategory.scss */\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.action-buttons p-button {\n  margin: 0;\n}\np-table ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem;\n  background-color: var(--primary-color);\n  color: var(--primary-contrast-color);\n  font-weight: 600;\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-hover);\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1rem;\n  vertical-align: middle;\n}\np-table ::ng-deep .p-datatable .p-datatable-emptymessage > tr > td {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\np-table ::ng-deep .p-paginator {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n}\np-toolbar ::ng-deep .p-toolbar {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  margin-bottom: 1.5rem;\n}\np-toolbar ::ng-deep .p-toolbar .p-toolbar-group-start,\np-toolbar ::ng-deep .p-toolbar .p-toolbar-group-end {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\np-tooltip ::ng-deep .p-tooltip {\n  background-color: var(--surface-overlay);\n  color: var(--text-color);\n  border: 1px solid var(--surface-border);\n}\np-iconfield ::ng-deep input {\n  width: 250px;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background-color: var(--surface-card);\n  color: var(--text-color);\n  transition: border-color var(--element-transition-duration);\n}\np-iconfield ::ng-deep input:focus {\n  border-color: var(--primary-color);\n  outline: none;\n}\np-iconfield ::ng-deep input::placeholder {\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=_assetcategory.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: MessageService }, { type: AssetService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgramComponent, { className: "ProgramComponent", filePath: "src/app/pages/assetcategory/program.ts", lineNumber: 87 });
})();

// src/app/pages/assetcategory/assetcategory.ts
var import_sweetalert28 = __toESM(require_sweetalert2_all());
var _c08 = () => [10, 20, 30];
var _c18 = () => ({ "min-width": "70rem" });
function ProgramComponent_ng_template_2_Template2(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 8);
    \u0275\u0275listener("onClick", function ProgramComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 9);
    \u0275\u0275listener("onClick", function ProgramComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelected());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedItems.length);
  }
}
function ProgramComponent_ng_template_4_Template2(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function ProgramComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 11);
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ProgramComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function ProgramComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function ProgramComponent_ng_template_7_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 13);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 14);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 15);
    \u0275\u0275text(6, "Program ");
    \u0275\u0275element(7, "p-sortIcon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 17);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function ProgramComponent_ng_template_8_Template2(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 19)(9, "p-button", 20);
    \u0275\u0275listener("onClick", function ProgramComponent_ng_template_8_Template_p_button_onClick_9_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.view(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-button", 21);
    \u0275\u0275listener("onClick", function ProgramComponent_ng_template_8_Template_p_button_onClick_10_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 22);
    \u0275\u0275listener("onClick", function ProgramComponent_ng_template_8_Template_p_button_onClick_11_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(row_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.programId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.programName);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function ProgramComponent_ng_template_9_Template2(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No programs found");
    \u0275\u0275elementEnd()();
  }
}
function SupplierComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 8);
    \u0275\u0275listener("onClick", function SupplierComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 9);
    \u0275\u0275listener("onClick", function SupplierComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelected());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedItems.length);
  }
}
function SupplierComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function SupplierComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 11);
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function SupplierComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function SupplierComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function SupplierComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 13);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 14);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 15);
    \u0275\u0275text(6, "Supplier ");
    \u0275\u0275element(7, "p-sortIcon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 17);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function SupplierComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 19)(9, "p-button", 20);
    \u0275\u0275listener("onClick", function SupplierComponent_ng_template_8_Template_p_button_onClick_9_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.view(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-button", 21);
    \u0275\u0275listener("onClick", function SupplierComponent_ng_template_8_Template_p_button_onClick_10_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 22);
    \u0275\u0275listener("onClick", function SupplierComponent_ng_template_8_Template_p_button_onClick_11_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(row_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.supplierId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.supplierName);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function SupplierComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No suppliers found");
    \u0275\u0275elementEnd()();
  }
}
var _c24 = "\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.action-buttons[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%] {\n  margin: 0;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem;\n  background-color: var(--primary-color);\n  color: var(--primary-contrast-color);\n  font-weight: 600;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-hover);\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1rem;\n  vertical-align: middle;\n}\np-table[_ngcontent-%COMP%]     .p-datatable .p-datatable-emptymessage > tr > td {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\np-table[_ngcontent-%COMP%]     .p-paginator {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n}\np-toolbar[_ngcontent-%COMP%]     .p-toolbar {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  margin-bottom: 1.5rem;\n}\np-toolbar[_ngcontent-%COMP%]     .p-toolbar .p-toolbar-group-start, \np-toolbar[_ngcontent-%COMP%]     .p-toolbar .p-toolbar-group-end {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\np-tooltip[_ngcontent-%COMP%]     .p-tooltip {\n  background-color: var(--surface-overlay);\n  color: var(--text-color);\n  border: 1px solid var(--surface-border);\n}\np-iconfield[_ngcontent-%COMP%]     input {\n  width: 250px;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background-color: var(--surface-card);\n  color: var(--text-color);\n  transition: border-color var(--element-transition-duration);\n}\np-iconfield[_ngcontent-%COMP%]     input:focus {\n  border-color: var(--primary-color);\n  outline: none;\n}\np-iconfield[_ngcontent-%COMP%]     input::placeholder {\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=_assetcategory.css.map */";
function LocationComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 8);
    \u0275\u0275listener("onClick", function LocationComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 9);
    \u0275\u0275listener("onClick", function LocationComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelected());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedItems.length);
  }
}
function LocationComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function LocationComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 11);
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function LocationComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function LocationComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function LocationComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 13);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 14);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 15);
    \u0275\u0275text(6, "Location ");
    \u0275\u0275element(7, "p-sortIcon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 17);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function LocationComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 19)(9, "p-button", 20);
    \u0275\u0275listener("onClick", function LocationComponent_ng_template_8_Template_p_button_onClick_9_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.view(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-button", 21);
    \u0275\u0275listener("onClick", function LocationComponent_ng_template_8_Template_p_button_onClick_10_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 22);
    \u0275\u0275listener("onClick", function LocationComponent_ng_template_8_Template_p_button_onClick_11_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(row_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.locationId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.locationName);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function LocationComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No locations found");
    \u0275\u0275elementEnd()();
  }
}
var sharedImports = [CommonModule, CardModule, ButtonModule, TableModule, InputTextModule, TooltipModule, ToolbarModule, ToastModule, IconFieldModule, InputIconModule, FormsModule];
var AssetCategoryBase = class _AssetCategoryBase {
  userService;
  messageService;
  assetService;
  items = [];
  filteredItems = [];
  selectedItems = [];
  searchValue = "";
  loading = true;
  constructor(userService, messageService, assetService) {
    this.userService = userService;
    this.messageService = messageService;
    this.assetService = assetService;
  }
  ngOnInit() {
    this.loadItems();
  }
  loadItems() {
    this.loading = true;
    this.items = [];
    this.filteredItems = [];
  }
  filter() {
    this.filteredItems = this.items.filter((item) => {
      const name = this.getItemName(item);
      return name?.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }
  getItemName(item) {
    return item.name || item.brandName || item.locationName || item.supplierName || item.programName || item.colorName || "";
  }
  onSelectionChange(event) {
  }
  openNewDialog() {
  }
  view(item) {
    const name = this.getItemName(item);
    import_sweetalert28.default.fire({ title: "View " + this.itemLabel, html: "<strong>Name:</strong> " + name, icon: "info" });
  }
  edit(item) {
  }
  delete(item) {
  }
  deleteSelected() {
  }
  exportCSV() {
    let csv = this.itemLabel + " Name\n";
    this.items.forEach((item) => {
      const name = this.getItemName(item);
      csv += name + "\n";
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = this.itemLabel.toLowerCase() + ".csv";
    a.click();
    window.URL.revokeObjectURL(url);
  }
  static \u0275fac = function AssetCategoryBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetCategoryBase)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AssetService));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _AssetCategoryBase });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetCategoryBase, [{
    type: Directive
  }], () => [{ type: UserService }, { type: MessageService }, { type: AssetService }], null);
})();
var ProgramComponent2 = class _ProgramComponent extends AssetCategoryBase {
  itemLabel = "Program";
  constructor(userService, messageService, assetService) {
    super(userService, messageService, assetService);
  }
  loadItems() {
    this.loading = true;
    this.assetService.getPrograms().subscribe({
      next: (data) => {
        this.items = data || [];
        this.filteredItems = [...this.items];
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading programs:", error);
        this.messageService.add({ severity: "error", summary: "Error", detail: "Failed to load programs" });
        this.loading = false;
      }
    });
  }
  getItemName(item) {
    return item.programName || "";
  }
  openNewDialog() {
    import_sweetalert28.default.fire({
      title: "New Program",
      html: `<input id="programName" class="swal2-input" placeholder="Program Name" />
                   <textarea id="description" class="swal2-textarea" placeholder="Description"></textarea>`,
      confirmButtonText: "Create",
      showCancelButton: true,
      preConfirm: () => {
        const programName = document.getElementById("programName").value.trim();
        const description = document.getElementById("description").value.trim();
        if (!programName) {
          import_sweetalert28.default.showValidationMessage("Program name is required");
          return false;
        }
        return { programName, description };
      }
    }).then((r) => {
      if (r.isConfirmed && r.value) {
        this.assetService.createProgram(r.value).subscribe({
          next: (created) => {
            this.items.push(created);
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Created", detail: "Program created" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Create failed" })
        });
      }
    });
  }
  edit(item) {
    import_sweetalert28.default.fire({
      title: "Edit Program",
      html: `<input id="programName" class="swal2-input" value="${item.programName}" />
                   <textarea id="description" class="swal2-textarea">${item.description || ""}</textarea>`,
      confirmButtonText: "Update",
      showCancelButton: true,
      preConfirm: () => {
        const programName = document.getElementById("programName").value.trim();
        const description = document.getElementById("description").value.trim();
        if (!programName) {
          import_sweetalert28.default.showValidationMessage("Program name is required");
          return false;
        }
        return { programName, description };
      }
    }).then((r) => {
      if (r.isConfirmed && r.value) {
        this.assetService.updateProgram(item.programId, r.value).subscribe({
          next: (updated) => {
            const idx = this.items.findIndex((p) => p.programId === updated.programId);
            if (idx > -1)
              this.items[idx] = updated;
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Updated", detail: "Program updated" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Update failed" })
        });
      }
    });
  }
  delete(item) {
    import_sweetalert28.default.fire({ title: "Delete Program", text: `Delete "${item.programName}"?`, icon: "warning", showCancelButton: true, confirmButtonText: "Delete" }).then((r) => {
      if (r.isConfirmed) {
        this.assetService.deleteProgram(item.programId).subscribe({
          next: () => {
            this.items = this.items.filter((p) => p.programId !== item.programId);
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Deleted", detail: "Program deleted" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Delete failed" })
        });
      }
    });
  }
  deleteSelected() {
    if (!this.selectedItems?.length)
      return;
    import_sweetalert28.default.fire({ title: "Delete Selected", text: `Delete ${this.selectedItems.length} program(s)?`, icon: "warning", showCancelButton: true, confirmButtonText: "Delete" }).then((r) => {
      if (r.isConfirmed) {
        const ids = this.selectedItems.map((p) => p.programId);
        Promise.all(ids.map((id) => this.assetService.deleteProgram(id).toPromise())).then(() => {
          this.items = this.items.filter((p) => !ids.includes(p.programId));
          this.filteredItems = [...this.items];
          this.selectedItems = [];
          this.messageService.add({ severity: "success", summary: "Deleted", detail: "Selected programs deleted" });
        }).catch(() => this.messageService.add({ severity: "error", summary: "Error", detail: "Bulk delete failed" }));
      }
    });
  }
  static \u0275fac = function ProgramComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgramComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AssetService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgramComponent, selectors: [["app-program"]], features: [\u0275\u0275ProvidersFeature([MessageService]), \u0275\u0275InheritDefinitionFeature], decls: 10, vars: 11, consts: [["start", ""], ["end", ""], ["styleClass", "mb-4"], ["dataKey", "programId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} programs", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search programs...", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], [2, "min-width", "25rem"], ["pSortableColumn", "programName", 2, "min-width", "20rem"], ["field", "programName"], [2, "min-width", "12rem"], [3, "value"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "severity", "info", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", 3, "onClick", "rounded", "text"], ["colspan", "4", 1, "text-center", "py-5"]], template: function ProgramComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 2);
      \u0275\u0275template(2, ProgramComponent_ng_template_2_Template2, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, ProgramComponent_ng_template_4_Template2, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275twoWayListener("selectionChange", function ProgramComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedItems, $event) || (ctx.selectedItems = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("selectionChange", function ProgramComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange($event));
      });
      \u0275\u0275template(7, ProgramComponent_ng_template_7_Template2, 10, 0, "ng-template", 4)(8, ProgramComponent_ng_template_8_Template2, 12, 9, "ng-template", 5)(9, ProgramComponent_ng_template_9_Template2, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filteredItems)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c08))("loading", ctx.loading)("rowHover", true);
      \u0275\u0275twoWayProperty("selection", ctx.selectedItems);
      \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c18));
    }
  }, dependencies: [CommonModule, CardModule, PrimeTemplate, ButtonModule, Button, TableModule, Table, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, InputTextModule, InputText, TooltipModule, ToolbarModule, Toolbar, ToastModule, Toast, IconFieldModule, IconField, InputIconModule, InputIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: [_c24] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgramComponent2, [{
    type: Component,
    args: [{ selector: "app-program", standalone: true, imports: sharedImports, providers: [MessageService], template: `
        <p-toast />
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNewDialog()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selectedItems.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search programs..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            [value]="filteredItems"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="programId"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} programs"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="programName" style="min-width:20rem">Program <p-sortIcon field="programName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.programId }}</td>
                    <td>{{ row.programName }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(row)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" class="text-center py-5">No programs found</td>
                </tr>
            </ng-template>
        </p-table>
    `, styles: ["/* src/assets/pages/_assetcategory.scss */\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.action-buttons p-button {\n  margin: 0;\n}\np-table ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem;\n  background-color: var(--primary-color);\n  color: var(--primary-contrast-color);\n  font-weight: 600;\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-hover);\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1rem;\n  vertical-align: middle;\n}\np-table ::ng-deep .p-datatable .p-datatable-emptymessage > tr > td {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\np-table ::ng-deep .p-paginator {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n}\np-toolbar ::ng-deep .p-toolbar {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  margin-bottom: 1.5rem;\n}\np-toolbar ::ng-deep .p-toolbar .p-toolbar-group-start,\np-toolbar ::ng-deep .p-toolbar .p-toolbar-group-end {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\np-tooltip ::ng-deep .p-tooltip {\n  background-color: var(--surface-overlay);\n  color: var(--text-color);\n  border: 1px solid var(--surface-border);\n}\np-iconfield ::ng-deep input {\n  width: 250px;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background-color: var(--surface-card);\n  color: var(--text-color);\n  transition: border-color var(--element-transition-duration);\n}\np-iconfield ::ng-deep input:focus {\n  border-color: var(--primary-color);\n  outline: none;\n}\np-iconfield ::ng-deep input::placeholder {\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=_assetcategory.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: MessageService }, { type: AssetService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgramComponent2, { className: "ProgramComponent", filePath: "src/app/pages/assetcategory/assetcategory.ts", lineNumber: 158 });
})();
var SupplierComponent = class _SupplierComponent extends AssetCategoryBase {
  itemLabel = "Supplier";
  constructor(userService, messageService, assetService) {
    super(userService, messageService, assetService);
  }
  loadItems() {
    this.loading = true;
    this.assetService.getSuppliers().subscribe({
      next: (data) => {
        this.items = data || [];
        this.filteredItems = [...this.items];
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading suppliers:", error);
        this.messageService.add({ severity: "error", summary: "Error", detail: "Failed to load suppliers" });
        this.loading = false;
      }
    });
  }
  getItemName(item) {
    return item.supplierName || "";
  }
  openNewDialog() {
    import_sweetalert28.default.fire({
      title: "New Supplier",
      html: `<input id="supplierName" class="swal2-input" placeholder="Supplier Name" />
                   <input id="supplierAddress" class="swal2-input" placeholder="Supplier Address" />
                   <input id="supplierContactNumber" class="swal2-input" value="+639" placeholder="Contact Number (+639xxxxxxxxx)" />`,
      confirmButtonText: "Create",
      showCancelButton: true,
      preConfirm: () => {
        const supplierName = document.getElementById("supplierName").value.trim();
        const supplierAddress = document.getElementById("supplierAddress").value.trim();
        const supplierContactNumber = document.getElementById("supplierContactNumber").value.trim();
        if (!supplierName) {
          import_sweetalert28.default.showValidationMessage("Supplier name is required");
          return false;
        }
        if (supplierContactNumber && !this.isValidPhilippinePhoneNumber(supplierContactNumber)) {
          import_sweetalert28.default.showValidationMessage("Contact number must be a valid Philippine phone number +63");
          return false;
        }
        return { supplierName, supplierAddress, supplierContactNumber };
      }
    }).then((r) => {
      if (r.isConfirmed && r.value) {
        this.assetService.createSupplier(r.value).subscribe({
          next: (created) => {
            this.items.push(created);
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Created", detail: "Supplier created" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Create failed" })
        });
      }
    });
  }
  edit(item) {
    import_sweetalert28.default.fire({
      title: "Edit Supplier",
      html: `<input id="supplierName" class="swal2-input" value="${item.supplierName}" />
                   <input id="supplierAddress" class="swal2-input" value="${item.supplierAddress || ""}" />
                   <input id="supplierContactNumber" class="swal2-input" value="${item.supplierContactNumber || ""}" placeholder="Contact Number (+63XXXXXXXXXX)" />`,
      confirmButtonText: "Update",
      showCancelButton: true,
      preConfirm: () => {
        const supplierName = document.getElementById("supplierName").value.trim();
        const supplierAddress = document.getElementById("supplierAddress").value.trim();
        const supplierContactNumber = document.getElementById("supplierContactNumber").value.trim();
        if (!supplierName) {
          import_sweetalert28.default.showValidationMessage("Supplier name is required");
          return false;
        }
        if (supplierContactNumber && !this.isValidPhilippinePhoneNumber(supplierContactNumber)) {
          import_sweetalert28.default.showValidationMessage("Contact number must be a valid Philippine phone number +63");
          return false;
        }
        return { supplierName, supplierAddress, supplierContactNumber };
      }
    }).then((r) => {
      if (r.isConfirmed && r.value) {
        this.assetService.updateSupplier(item.supplierId, r.value).subscribe({
          next: (updated) => {
            const idx = this.items.findIndex((s) => s.supplierId === updated.supplierId);
            if (idx > -1)
              this.items[idx] = updated;
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Updated", detail: "Supplier updated" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Update failed" })
        });
      }
    });
  }
  delete(item) {
    import_sweetalert28.default.fire({ title: "Delete Supplier", text: `Delete "${item.supplierName}"?`, icon: "warning", showCancelButton: true, confirmButtonText: "Delete" }).then((r) => {
      if (r.isConfirmed) {
        this.assetService.deleteSupplier(item.supplierId).subscribe({
          next: () => {
            this.items = this.items.filter((s) => s.supplierId !== item.supplierId);
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Deleted", detail: "Supplier deleted" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Delete failed" })
        });
      }
    });
  }
  deleteSelected() {
    if (!this.selectedItems?.length)
      return;
    import_sweetalert28.default.fire({ title: "Delete Selected", text: `Delete ${this.selectedItems.length} supplier(s)?`, icon: "warning", showCancelButton: true, confirmButtonText: "Delete" }).then((r) => {
      if (r.isConfirmed) {
        const ids = this.selectedItems.map((s) => s.supplierId);
        Promise.all(ids.map((id) => this.assetService.deleteSupplier(id).toPromise())).then(() => {
          this.items = this.items.filter((s) => !ids.includes(s.supplierId));
          this.filteredItems = [...this.items];
          this.selectedItems = [];
          this.messageService.add({ severity: "success", summary: "Deleted", detail: "Selected suppliers deleted" });
        }).catch(() => this.messageService.add({ severity: "error", summary: "Error", detail: "Bulk delete failed" }));
      }
    });
  }
  isValidPhilippinePhoneNumber(phoneNumber) {
    const pattern = /^\+63\d{10}$/;
    return pattern.test(phoneNumber);
  }
  static \u0275fac = function SupplierComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupplierComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AssetService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierComponent, selectors: [["app-supplier"]], features: [\u0275\u0275ProvidersFeature([MessageService]), \u0275\u0275InheritDefinitionFeature], decls: 10, vars: 11, consts: [["start", ""], ["end", ""], ["styleClass", "mb-4"], ["dataKey", "supplierId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} suppliers", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search suppliers...", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], [2, "min-width", "25rem"], ["pSortableColumn", "supplierName", 2, "min-width", "20rem"], ["field", "supplierName"], [2, "min-width", "12rem"], [3, "value"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "severity", "info", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", 3, "onClick", "rounded", "text"], ["colspan", "4", 1, "text-center", "py-5"]], template: function SupplierComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 2);
      \u0275\u0275template(2, SupplierComponent_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, SupplierComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275twoWayListener("selectionChange", function SupplierComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedItems, $event) || (ctx.selectedItems = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("selectionChange", function SupplierComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange($event));
      });
      \u0275\u0275template(7, SupplierComponent_ng_template_7_Template, 10, 0, "ng-template", 4)(8, SupplierComponent_ng_template_8_Template, 12, 9, "ng-template", 5)(9, SupplierComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filteredItems)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c08))("loading", ctx.loading)("rowHover", true);
      \u0275\u0275twoWayProperty("selection", ctx.selectedItems);
      \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c18));
    }
  }, dependencies: [CommonModule, CardModule, PrimeTemplate, ButtonModule, Button, TableModule, Table, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, InputTextModule, InputText, TooltipModule, ToolbarModule, Toolbar, ToastModule, Toast, IconFieldModule, IconField, InputIconModule, InputIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: [_c24] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierComponent, [{
    type: Component,
    args: [{ selector: "app-supplier", standalone: true, imports: sharedImports, providers: [MessageService], template: `
        <p-toast />
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNewDialog()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selectedItems.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search suppliers..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            [value]="filteredItems"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="supplierId"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} suppliers"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="supplierName" style="min-width:20rem">Supplier <p-sortIcon field="supplierName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.supplierId }}</td>
                    <td>{{ row.supplierName }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(row)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" class="text-center py-5">No suppliers found</td>
                </tr>
            </ng-template>
        </p-table>
    `, styles: ["/* src/assets/pages/_assetcategory.scss */\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.action-buttons p-button {\n  margin: 0;\n}\np-table ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem;\n  background-color: var(--primary-color);\n  color: var(--primary-contrast-color);\n  font-weight: 600;\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-hover);\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1rem;\n  vertical-align: middle;\n}\np-table ::ng-deep .p-datatable .p-datatable-emptymessage > tr > td {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\np-table ::ng-deep .p-paginator {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n}\np-toolbar ::ng-deep .p-toolbar {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  margin-bottom: 1.5rem;\n}\np-toolbar ::ng-deep .p-toolbar .p-toolbar-group-start,\np-toolbar ::ng-deep .p-toolbar .p-toolbar-group-end {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\np-tooltip ::ng-deep .p-tooltip {\n  background-color: var(--surface-overlay);\n  color: var(--text-color);\n  border: 1px solid var(--surface-border);\n}\np-iconfield ::ng-deep input {\n  width: 250px;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background-color: var(--surface-card);\n  color: var(--text-color);\n  transition: border-color var(--element-transition-duration);\n}\np-iconfield ::ng-deep input:focus {\n  border-color: var(--primary-color);\n  outline: none;\n}\np-iconfield ::ng-deep input::placeholder {\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=_assetcategory.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: MessageService }, { type: AssetService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierComponent, { className: "SupplierComponent", filePath: "src/app/pages/assetcategory/assetcategory.ts", lineNumber: 348 });
})();
var LocationComponent = class _LocationComponent extends AssetCategoryBase {
  itemLabel = "Location";
  constructor(userService, messageService, assetService) {
    super(userService, messageService, assetService);
  }
  loadItems() {
    this.loading = true;
    this.assetService.getLocations().subscribe({
      next: (data) => {
        this.items = data || [];
        this.filteredItems = [...this.items];
        this.loading = false;
      },
      error: (error) => {
        console.error("Error loading locations:", error);
        this.messageService.add({ severity: "error", summary: "Error", detail: "Failed to load locations" });
        this.loading = false;
      }
    });
  }
  getItemName(item) {
    return item.locationName || "";
  }
  openNewDialog() {
    import_sweetalert28.default.fire({
      title: "New Location",
      html: `<input id="locationName" class="swal2-input" placeholder="Location Name" />
                  <textarea id="description" class="swal2-textarea" placeholder="Description"></textarea>`,
      confirmButtonText: "Create",
      showCancelButton: true,
      preConfirm: () => {
        const locationName = document.getElementById("locationName").value.trim();
        const description = document.getElementById("description").value.trim();
        if (!locationName) {
          import_sweetalert28.default.showValidationMessage("Location name is required");
          return false;
        }
        return { locationName, description };
      }
    }).then((r) => {
      if (r.isConfirmed && r.value) {
        this.assetService.createLocation(r.value).subscribe({
          next: (created) => {
            this.items.push(created);
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Created", detail: "Location created" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Create failed" })
        });
      }
    });
  }
  edit(item) {
    import_sweetalert28.default.fire({
      title: "Edit Location",
      html: `<input id="locationName" class="swal2-input" value="${item.locationName}" />
                  <textarea id="description" class="swal2-textarea">${item.description || ""}</textarea>`,
      confirmButtonText: "Update",
      showCancelButton: true,
      preConfirm: () => {
        const locationName = document.getElementById("locationName").value.trim();
        const description = document.getElementById("description").value.trim();
        if (!locationName) {
          import_sweetalert28.default.showValidationMessage("Location name is required");
          return false;
        }
        return { locationName, description };
      }
    }).then((r) => {
      if (r.isConfirmed && r.value) {
        this.assetService.updateLocation(item.locationId, r.value).subscribe({
          next: (updated) => {
            const idx = this.items.findIndex((l) => l.locationId === updated.locationId);
            if (idx > -1)
              this.items[idx] = updated;
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Updated", detail: "Location updated" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Update failed" })
        });
      }
    });
  }
  delete(item) {
    import_sweetalert28.default.fire({ title: "Delete Location", text: `Delete "${item.locationName}"?`, icon: "warning", showCancelButton: true, confirmButtonText: "Delete" }).then((r) => {
      if (r.isConfirmed) {
        this.assetService.deleteLocation(item.locationId).subscribe({
          next: () => {
            this.items = this.items.filter((l) => l.locationId !== item.locationId);
            this.filteredItems = [...this.items];
            this.messageService.add({ severity: "success", summary: "Deleted", detail: "Location deleted" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Delete failed" })
        });
      }
    });
  }
  deleteSelected() {
    if (!this.selectedItems?.length)
      return;
    import_sweetalert28.default.fire({ title: "Delete Selected", text: `Delete ${this.selectedItems.length} location(s)?`, icon: "warning", showCancelButton: true, confirmButtonText: "Delete" }).then((r) => {
      if (r.isConfirmed) {
        const ids = this.selectedItems.map((l) => l.locationId);
        Promise.all(ids.map((id) => this.assetService.deleteLocation(id).toPromise())).then(() => {
          this.items = this.items.filter((l) => !ids.includes(l.locationId));
          this.filteredItems = [...this.items];
          this.selectedItems = [];
          this.messageService.add({ severity: "success", summary: "Deleted", detail: "Selected locations deleted" });
        }).catch(() => this.messageService.add({ severity: "error", summary: "Error", detail: "Bulk delete failed" }));
      }
    });
  }
  static \u0275fac = function LocationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LocationComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(AssetService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LocationComponent, selectors: [["app-location"]], features: [\u0275\u0275ProvidersFeature([MessageService]), \u0275\u0275InheritDefinitionFeature], decls: 10, vars: 11, consts: [["start", ""], ["end", ""], ["styleClass", "mb-4"], ["dataKey", "locationId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} locations", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search locations...", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], [2, "min-width", "25rem"], ["pSortableColumn", "locationName", 2, "min-width", "20rem"], ["field", "locationName"], [2, "min-width", "12rem"], [3, "value"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "severity", "info", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", 3, "onClick", "rounded", "text"], ["colspan", "4", 1, "text-center", "py-5"]], template: function LocationComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 2);
      \u0275\u0275template(2, LocationComponent_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, LocationComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275twoWayListener("selectionChange", function LocationComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedItems, $event) || (ctx.selectedItems = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("selectionChange", function LocationComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange($event));
      });
      \u0275\u0275template(7, LocationComponent_ng_template_7_Template, 10, 0, "ng-template", 4)(8, LocationComponent_ng_template_8_Template, 12, 9, "ng-template", 5)(9, LocationComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filteredItems)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c08))("loading", ctx.loading)("rowHover", true);
      \u0275\u0275twoWayProperty("selection", ctx.selectedItems);
      \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c18));
    }
  }, dependencies: [CommonModule, CardModule, PrimeTemplate, ButtonModule, Button, TableModule, Table, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, InputTextModule, InputText, TooltipModule, ToolbarModule, Toolbar, ToastModule, Toast, IconFieldModule, IconField, InputIconModule, InputIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: [_c24] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocationComponent, [{
    type: Component,
    args: [{ selector: "app-location", standalone: true, imports: sharedImports, providers: [MessageService], template: `
        <p-toast />
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNewDialog()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selectedItems.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search locations..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            [value]="filteredItems"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="locationId"
            [(selection)]="selectedItems"
            (selectionChange)="onSelectionChange($event)"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} locations"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="locationName" style="min-width:20rem">Location <p-sortIcon field="locationName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.locationId }}</td>
                    <td>{{ row.locationName }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(row)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" class="text-center py-5">No locations found</td>
                </tr>
            </ng-template>
        </p-table>
    `, styles: ["/* src/assets/pages/_assetcategory.scss */\n.action-buttons {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n.action-buttons p-button {\n  margin: 0;\n}\np-table ::ng-deep .p-datatable .p-datatable-thead > tr > th {\n  padding: 1rem;\n  background-color: var(--primary-color);\n  color: var(--primary-contrast-color);\n  font-weight: 600;\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr:hover {\n  background-color: var(--surface-hover);\n}\np-table ::ng-deep .p-datatable .p-datatable-tbody > tr > td {\n  padding: 1rem;\n  vertical-align: middle;\n}\np-table ::ng-deep .p-datatable .p-datatable-emptymessage > tr > td {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-color-secondary);\n}\np-table ::ng-deep .p-paginator {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n}\np-toolbar ::ng-deep .p-toolbar {\n  padding: 1rem;\n  background-color: var(--surface-overlay);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  margin-bottom: 1.5rem;\n}\np-toolbar ::ng-deep .p-toolbar .p-toolbar-group-start,\np-toolbar ::ng-deep .p-toolbar .p-toolbar-group-end {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\np-tooltip ::ng-deep .p-tooltip {\n  background-color: var(--surface-overlay);\n  color: var(--text-color);\n  border: 1px solid var(--surface-border);\n}\np-iconfield ::ng-deep input {\n  width: 250px;\n  padding: 0.75rem 1rem 0.75rem 2.5rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background-color: var(--surface-card);\n  color: var(--text-color);\n  transition: border-color var(--element-transition-duration);\n}\np-iconfield ::ng-deep input:focus {\n  border-color: var(--primary-color);\n  outline: none;\n}\np-iconfield ::ng-deep input::placeholder {\n  color: var(--text-color-secondary);\n}\n/*# sourceMappingURL=_assetcategory.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: MessageService }, { type: AssetService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LocationComponent, { className: "LocationComponent", filePath: "src/app/pages/assetcategory/assetcategory.ts", lineNumber: 562 });
})();

// src/app/pages/assetcategory/assetcategory.routes.ts
var ASSET_CATEGORY_ROUTES = [
  { path: "brand", component: BrandComponent },
  { path: "color", component: ColorComponent },
  { path: "program", component: ProgramComponent },
  { path: "supplier", component: SupplierComponent },
  { path: "location", component: LocationComponent },
  { path: "status", component: StatusComponent }
];

// src/app/pages/maintenance/services/services.ts
var import_sweetalert29 = __toESM(require_sweetalert2_all());
var _c09 = () => [10, 20, 30];
var _c19 = () => ({ "min-width": "90rem" });
function MaintenanceServicesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 8);
    \u0275\u0275listener("onClick", function MaintenanceServicesComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 9);
    \u0275\u0275listener("onClick", function MaintenanceServicesComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelected());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selected.length);
  }
}
function MaintenanceServicesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function MaintenanceServicesComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 11);
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function MaintenanceServicesComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function MaintenanceServicesComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function MaintenanceServicesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 13);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 14);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 15);
    \u0275\u0275text(6, "Service Name ");
    \u0275\u0275element(7, "p-sortIcon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 17);
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 18);
    \u0275\u0275text(11, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function MaintenanceServicesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 20)(11, "p-button", 21);
    \u0275\u0275listener("onClick", function MaintenanceServicesComponent_ng_template_8_Template_p_button_onClick_11_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.view(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p-button", 22);
    \u0275\u0275listener("onClick", function MaintenanceServicesComponent_ng_template_8_Template_p_button_onClick_12_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-button", 23);
    \u0275\u0275listener("onClick", function MaintenanceServicesComponent_ng_template_8_Template_p_button_onClick_13_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(row_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.serviceMaintenanceId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.serviceName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.serviceDescription);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function MaintenanceServicesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2, "No services found");
    \u0275\u0275elementEnd()();
  }
}
var MaintenanceServicesComponent = class _MaintenanceServicesComponent {
  maintenanceService;
  messageService;
  services = [];
  filtered = [];
  selected = [];
  loading = false;
  searchValue = "";
  constructor(maintenanceService, messageService) {
    this.maintenanceService = maintenanceService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.maintenanceService.getServiceMaintenances().subscribe({
      next: (data) => {
        this.services = data || [];
        this.filtered = [...this.services];
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading service maintenances", err);
        this.loading = false;
      }
    });
  }
  filter() {
    const q = this.searchValue.toLowerCase();
    this.filtered = this.services.filter((s) => s.serviceName.toLowerCase().includes(q) || s.serviceDescription.toLowerCase().includes(q));
  }
  onSelectionChange() {
  }
  openNew() {
    import_sweetalert29.default.fire({
      title: "New Service",
      html: `
              <input id="serviceName" class="swal2-input" placeholder="Service Name" />
              <textarea id="serviceDescription" class="swal2-textarea" placeholder="Description"></textarea>
            `,
      confirmButtonText: "Create",
      showCancelButton: true,
      preConfirm: () => {
        const name = document.getElementById("serviceName").value.trim();
        const desc = document.getElementById("serviceDescription").value.trim();
        if (!name) {
          import_sweetalert29.default.showValidationMessage("Service name is required");
          return false;
        }
        return { serviceName: name, serviceDescription: desc };
      }
    }).then((res) => {
      if (res.isConfirmed && res.value) {
        this.maintenanceService.createServiceMaintenance(res.value).subscribe({
          next: (created) => {
            this.messageService.add({ severity: "success", summary: "Created", detail: "Service created" });
            this.services.push(created);
            this.filter();
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Create failed" })
        });
      }
    });
  }
  view(row) {
    import_sweetalert29.default.fire({ title: "Service", html: `<b>${row.serviceName}</b><br/><em>${row.serviceDescription || "No description"}</em>` });
  }
  edit(row) {
    import_sweetalert29.default.fire({
      title: "Edit Service",
      html: `
              <input id="serviceName" class="swal2-input" value="${row.serviceName}" />
              <textarea id="serviceDescription" class="swal2-textarea">${row.serviceDescription || ""}</textarea>
            `,
      confirmButtonText: "Update",
      showCancelButton: true,
      preConfirm: () => {
        const name = document.getElementById("serviceName").value.trim();
        const desc = document.getElementById("serviceDescription").value.trim();
        if (!name) {
          import_sweetalert29.default.showValidationMessage("Service name is required");
          return false;
        }
        return { serviceName: name, serviceDescription: desc };
      }
    }).then((res) => {
      if (res.isConfirmed && res.value) {
        this.maintenanceService.updateServiceMaintenance(row.serviceMaintenanceId, res.value).subscribe({
          next: (updated) => {
            const idx = this.services.findIndex((s) => s.serviceMaintenanceId === updated.serviceMaintenanceId);
            if (idx > -1)
              this.services[idx] = updated;
            this.filter();
            this.messageService.add({ severity: "success", summary: "Updated", detail: "Service updated" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Update failed" })
        });
      }
    });
  }
  delete(row) {
    import_sweetalert29.default.fire({
      title: "Delete Service",
      text: `Delete "${row.serviceName}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((res) => {
      if (res.isConfirmed) {
        this.maintenanceService.deleteServiceMaintenance(row.serviceMaintenanceId).subscribe({
          next: () => {
            this.services = this.services.filter((s) => s.serviceMaintenanceId !== row.serviceMaintenanceId);
            this.filter();
            this.messageService.add({ severity: "success", summary: "Deleted", detail: "Service deleted" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Delete failed" })
        });
      }
    });
  }
  deleteSelected() {
    if (!this.selected.length)
      return;
    import_sweetalert29.default.fire({
      title: "Delete Selected",
      text: `Delete ${this.selected.length} service(s)?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((res) => {
      if (res.isConfirmed) {
        const ids = this.selected.map((s) => s.serviceMaintenanceId);
        Promise.all(ids.map((id) => this.maintenanceService.deleteServiceMaintenance(id).toPromise())).then(() => {
          this.services = this.services.filter((s) => !ids.includes(s.serviceMaintenanceId));
          this.selected = [];
          this.filter();
          this.messageService.add({ severity: "success", summary: "Deleted", detail: "Selected services deleted" });
        }).catch(() => this.messageService.add({ severity: "error", summary: "Error", detail: "Bulk delete failed" }));
      }
    });
  }
  exportCSV() {
    let csv = "Service Name,Description,ID\n";
    this.services.forEach((s) => csv += `${s.serviceName.replace(/,/g, ";")},${(s.serviceDescription || "").replace(/,/g, ";")},${s.serviceMaintenanceId}
`);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "maintenance-services.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function MaintenanceServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaintenanceServicesComponent)(\u0275\u0275directiveInject(MaintenanceService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaintenanceServicesComponent, selectors: [["app-maintenance-services"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 10, vars: 11, consts: [["start", ""], ["end", ""], ["styleClass", "mb-4"], ["dataKey", "serviceMaintenanceId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} services", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search services...", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], [2, "min-width", "25rem"], ["pSortableColumn", "serviceName", 2, "min-width", "20rem"], ["field", "serviceName"], [2, "min-width", "35rem"], [2, "min-width", "12rem"], [3, "value"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "severity", "info", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", 3, "onClick", "rounded", "text"], ["colspan", "5", 1, "text-center", "py-5"]], template: function MaintenanceServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 2);
      \u0275\u0275template(2, MaintenanceServicesComponent_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, MaintenanceServicesComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275twoWayListener("selectionChange", function MaintenanceServicesComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selected, $event) || (ctx.selected = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("selectionChange", function MaintenanceServicesComponent_Template_p_table_selectionChange_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange());
      });
      \u0275\u0275template(7, MaintenanceServicesComponent_ng_template_7_Template, 12, 0, "ng-template", 4)(8, MaintenanceServicesComponent_ng_template_8_Template, 14, 10, "ng-template", 5)(9, MaintenanceServicesComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filtered)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c09))("loading", ctx.loading)("rowHover", true);
      \u0275\u0275twoWayProperty("selection", ctx.selected);
      \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c19));
    }
  }, dependencies: [CommonModule, TableModule, Table, PrimeTemplate, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, ToolbarModule, Toolbar, ButtonModule, Button, InputTextModule, InputText, IconFieldModule, IconField, InputIconModule, InputIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ToastModule, Toast], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenanceServicesComponent, [{
    type: Component,
    args: [{
      selector: "app-maintenance-services",
      standalone: true,
      imports: [CommonModule, TableModule, ToolbarModule, ButtonModule, InputTextModule, IconFieldModule, InputIconModule, FormsModule, ToastModule],
      providers: [MessageService],
      template: `
        <p-toast />
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNew()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selected.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search services..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>

        <p-table
            [value]="filtered"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="serviceMaintenanceId"
            [(selection)]="selected"
            (selectionChange)="onSelectionChange()"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} services"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '90rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem">
                        <p-tableHeaderCheckbox />
                    </th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="serviceName" style="min-width:20rem">Service Name <p-sortIcon field="serviceName" /></th>
                    <th style="min-width:35rem">Description</th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.serviceMaintenanceId }}</td>
                    <td>{{ row.serviceName }}</td>
                    <td>{{ row.serviceDescription }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(row)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="5" class="text-center py-5">No services found</td>
                </tr>
            </ng-template>
        </p-table>
    `
    }]
  }], () => [{ type: MaintenanceService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaintenanceServicesComponent, { className: "MaintenanceServicesComponent", filePath: "src/app/pages/maintenance/services/services.ts", lineNumber: 88 });
})();

// src/app/pages/maintenance/status/maintenance-status.ts
var import_sweetalert210 = __toESM(require_sweetalert2_all());
var _c010 = () => [10, 20, 30];
var _c110 = () => ({ "min-width": "70rem" });
function MaintenanceStatusComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 8);
    \u0275\u0275listener("onClick", function MaintenanceStatusComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 9);
    \u0275\u0275listener("onClick", function MaintenanceStatusComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelected());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selected.length);
  }
}
function MaintenanceStatusComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function MaintenanceStatusComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 11);
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function MaintenanceStatusComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function MaintenanceStatusComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function MaintenanceStatusComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 13);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 14);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 15);
    \u0275\u0275text(6, "Status Name ");
    \u0275\u0275element(7, "p-sortIcon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 17);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function MaintenanceStatusComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 19)(9, "p-button", 20);
    \u0275\u0275listener("onClick", function MaintenanceStatusComponent_ng_template_8_Template_p_button_onClick_9_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.view(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-button", 21);
    \u0275\u0275listener("onClick", function MaintenanceStatusComponent_ng_template_8_Template_p_button_onClick_10_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 22);
    \u0275\u0275listener("onClick", function MaintenanceStatusComponent_ng_template_8_Template_p_button_onClick_11_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(row_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.requestStatusId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.requestStatusName);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function MaintenanceStatusComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No statuses found");
    \u0275\u0275elementEnd()();
  }
}
var MaintenanceStatusComponent = class _MaintenanceStatusComponent {
  maintenanceService;
  messageService;
  statuses = [];
  filtered = [];
  selected = [];
  loading = false;
  searchValue = "";
  constructor(maintenanceService, messageService) {
    this.maintenanceService = maintenanceService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.maintenanceService.getRequestStatuses().subscribe({
      next: (data) => {
        this.statuses = data || [];
        this.filtered = [...this.statuses];
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading request statuses", err);
        this.loading = false;
      }
    });
  }
  filter() {
    const q = this.searchValue.toLowerCase();
    this.filtered = this.statuses.filter((s) => s.requestStatusName.toLowerCase().includes(q));
  }
  onSelectionChange() {
  }
  openNew() {
    import_sweetalert210.default.fire({
      title: "New Status",
      html: `<input id="statusName" class="swal2-input" placeholder="Status Name" />`,
      confirmButtonText: "Create",
      showCancelButton: true,
      preConfirm: () => {
        const name = document.getElementById("statusName").value.trim();
        if (!name) {
          import_sweetalert210.default.showValidationMessage("Status name is required");
          return false;
        }
        return { requestStatusName: name };
      }
    }).then((res) => {
      if (res.isConfirmed && res.value) {
        this.maintenanceService.createRequestStatus(res.value).subscribe({
          next: (created) => {
            this.statuses.push(created);
            this.filter();
            this.messageService.add({ severity: "success", summary: "Created", detail: "Status created" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Create failed" })
        });
      }
    });
  }
  view(row) {
    import_sweetalert210.default.fire({ title: "Status", text: row.requestStatusName });
  }
  edit(row) {
    import_sweetalert210.default.fire({
      title: "Edit Status",
      html: `<input id="statusName" class="swal2-input" value="${row.requestStatusName}" />`,
      confirmButtonText: "Update",
      showCancelButton: true,
      preConfirm: () => {
        const name = document.getElementById("statusName").value.trim();
        if (!name) {
          import_sweetalert210.default.showValidationMessage("Status name is required");
          return false;
        }
        return { requestStatusName: name };
      }
    }).then((res) => {
      if (res.isConfirmed && res.value) {
        this.maintenanceService.updateRequestStatus(row.requestStatusId, res.value).subscribe({
          next: (updated) => {
            const idx = this.statuses.findIndex((s) => s.requestStatusId === updated.requestStatusId);
            if (idx > -1)
              this.statuses[idx] = updated;
            this.filter();
            this.messageService.add({ severity: "success", summary: "Updated", detail: "Status updated" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Update failed" })
        });
      }
    });
  }
  delete(row) {
    import_sweetalert210.default.fire({
      title: "Delete Status",
      text: `Delete "${row.requestStatusName}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((res) => {
      if (res.isConfirmed) {
        this.maintenanceService.deleteRequestStatus(row.requestStatusId).subscribe({
          next: () => {
            this.statuses = this.statuses.filter((s) => s.requestStatusId !== row.requestStatusId);
            this.filter();
            this.messageService.add({ severity: "success", summary: "Deleted", detail: "Status deleted" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Delete failed" })
        });
      }
    });
  }
  deleteSelected() {
    if (!this.selected.length)
      return;
    import_sweetalert210.default.fire({
      title: "Delete Selected",
      text: `Delete ${this.selected.length} status(es)?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((res) => {
      if (res.isConfirmed) {
        const ids = this.selected.map((s) => s.requestStatusId);
        Promise.all(ids.map((id) => this.maintenanceService.deleteRequestStatus(id).toPromise())).then(() => {
          this.statuses = this.statuses.filter((s) => !ids.includes(s.requestStatusId));
          this.selected = [];
          this.filter();
          this.messageService.add({ severity: "success", summary: "Deleted", detail: "Selected statuses deleted" });
        }).catch(() => this.messageService.add({ severity: "error", summary: "Error", detail: "Bulk delete failed" }));
      }
    });
  }
  exportCSV() {
    let csv = "Status Name,ID\n";
    this.statuses.forEach((s) => csv += `${s.requestStatusName.replace(/,/g, ";")},${s.requestStatusId}
`);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "maintenance-status.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function MaintenanceStatusComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaintenanceStatusComponent)(\u0275\u0275directiveInject(MaintenanceService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaintenanceStatusComponent, selectors: [["app-maintenance-status"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 10, vars: 11, consts: [["start", ""], ["end", ""], ["styleClass", "mb-4"], ["dataKey", "requestStatusId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} statuses", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search status...", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], [2, "min-width", "25rem"], ["pSortableColumn", "requestStatusName", 2, "min-width", "20rem"], ["field", "requestStatusName"], [2, "min-width", "12rem"], [3, "value"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "severity", "info", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", 3, "onClick", "rounded", "text"], ["colspan", "4", 1, "text-center", "py-5"]], template: function MaintenanceStatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 2);
      \u0275\u0275template(2, MaintenanceStatusComponent_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, MaintenanceStatusComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275twoWayListener("selectionChange", function MaintenanceStatusComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selected, $event) || (ctx.selected = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("selectionChange", function MaintenanceStatusComponent_Template_p_table_selectionChange_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange());
      });
      \u0275\u0275template(7, MaintenanceStatusComponent_ng_template_7_Template, 10, 0, "ng-template", 4)(8, MaintenanceStatusComponent_ng_template_8_Template, 12, 9, "ng-template", 5)(9, MaintenanceStatusComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filtered)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c010))("loading", ctx.loading)("rowHover", true);
      \u0275\u0275twoWayProperty("selection", ctx.selected);
      \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c110));
    }
  }, dependencies: [CommonModule, TableModule, Table, PrimeTemplate, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, ToolbarModule, Toolbar, InputTextModule, InputText, IconFieldModule, IconField, InputIconModule, InputIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, ToastModule, Toast], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenanceStatusComponent, [{
    type: Component,
    args: [{
      selector: "app-maintenance-status",
      standalone: true,
      imports: [CommonModule, TableModule, ToolbarModule, InputTextModule, IconFieldModule, InputIconModule, FormsModule, ButtonModule, ToastModule],
      providers: [MessageService],
      template: `
        <p-toast />
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNew()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selected.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search status..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            [value]="filtered"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="requestStatusId"
            [(selection)]="selected"
            (selectionChange)="onSelectionChange()"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} statuses"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="requestStatusName" style="min-width:20rem">Status Name <p-sortIcon field="requestStatusName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.requestStatusId }}</td>
                    <td>{{ row.requestStatusName }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(row)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" class="text-center py-5">No statuses found</td>
                </tr>
            </ng-template>
        </p-table>
    `
    }]
  }], () => [{ type: MaintenanceService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaintenanceStatusComponent, { className: "MaintenanceStatusComponent", filePath: "src/app/pages/maintenance/status/maintenance-status.ts", lineNumber: 83 });
})();

// src/app/pages/maintenance/priority-level/maintenance-priority-level.ts
var import_sweetalert211 = __toESM(require_sweetalert2_all());
var _c011 = () => [10, 20, 30];
var _c111 = () => ({ "min-width": "70rem" });
function MaintenancePriorityLevelComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 8);
    \u0275\u0275listener("onClick", function MaintenancePriorityLevelComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 9);
    \u0275\u0275listener("onClick", function MaintenancePriorityLevelComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelected());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selected.length);
  }
}
function MaintenancePriorityLevelComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function MaintenancePriorityLevelComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 11);
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function MaintenancePriorityLevelComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function MaintenancePriorityLevelComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function MaintenancePriorityLevelComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 13);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 14);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 15);
    \u0275\u0275text(6, "Priority Level ");
    \u0275\u0275element(7, "p-sortIcon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 17);
    \u0275\u0275text(9, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function MaintenancePriorityLevelComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "div", 19)(9, "p-button", 20);
    \u0275\u0275listener("onClick", function MaintenancePriorityLevelComponent_ng_template_8_Template_p_button_onClick_9_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.view(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-button", 21);
    \u0275\u0275listener("onClick", function MaintenancePriorityLevelComponent_ng_template_8_Template_p_button_onClick_10_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p-button", 22);
    \u0275\u0275listener("onClick", function MaintenancePriorityLevelComponent_ng_template_8_Template_p_button_onClick_11_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.delete(row_r6));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.priorityLevelId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.priorityLevelName);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function MaintenancePriorityLevelComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2, "No priority levels found");
    \u0275\u0275elementEnd()();
  }
}
var MaintenancePriorityLevelComponent = class _MaintenancePriorityLevelComponent {
  maintenanceService;
  messageService;
  priorityLevels = [];
  filtered = [];
  selected = [];
  loading = false;
  searchValue = "";
  constructor(maintenanceService, messageService) {
    this.maintenanceService = maintenanceService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.maintenanceService.getPriorityLevels().subscribe({
      next: (data) => {
        this.priorityLevels = data || [];
        this.filtered = [...this.priorityLevels];
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading priority levels", err);
        this.loading = false;
      }
    });
  }
  filter() {
    const q = this.searchValue.toLowerCase();
    this.filtered = this.priorityLevels.filter((p) => p.priorityLevelName.toLowerCase().includes(q));
  }
  onSelectionChange() {
  }
  openNew() {
    import_sweetalert211.default.fire({
      title: "New Priority Level",
      html: `<input id="plName" class="swal2-input" placeholder="Priority Level" />`,
      confirmButtonText: "Create",
      showCancelButton: true,
      preConfirm: () => {
        const name = document.getElementById("plName").value.trim();
        if (!name) {
          import_sweetalert211.default.showValidationMessage("Priority level name is required");
          return false;
        }
        return { priorityLevelName: name };
      }
    }).then((res) => {
      if (res.isConfirmed && res.value) {
        this.maintenanceService.createPriorityLevel(res.value).subscribe({
          next: (created) => {
            this.priorityLevels.push(created);
            this.filter();
            this.messageService.add({ severity: "success", summary: "Created", detail: "Priority level created" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Create failed" })
        });
      }
    });
  }
  view(row) {
    import_sweetalert211.default.fire({ title: "Priority Level", text: row.priorityLevelName });
  }
  edit(row) {
    import_sweetalert211.default.fire({
      title: "Edit Priority Level",
      html: `<input id="plName" class="swal2-input" value="${row.priorityLevelName}" />`,
      confirmButtonText: "Update",
      showCancelButton: true,
      preConfirm: () => {
        const name = document.getElementById("plName").value.trim();
        if (!name) {
          import_sweetalert211.default.showValidationMessage("Priority level name is required");
          return false;
        }
        return { priorityLevelName: name };
      }
    }).then((res) => {
      if (res.isConfirmed && res.value) {
        this.maintenanceService.updatePriorityLevel(row.priorityLevelId, res.value).subscribe({
          next: (updated) => {
            const idx = this.priorityLevels.findIndex((p) => p.priorityLevelId === updated.priorityLevelId);
            if (idx > -1)
              this.priorityLevels[idx] = updated;
            this.filter();
            this.messageService.add({ severity: "success", summary: "Updated", detail: "Priority level updated" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Update failed" })
        });
      }
    });
  }
  delete(row) {
    import_sweetalert211.default.fire({
      title: "Delete Priority Level",
      text: `Delete "${row.priorityLevelName}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((res) => {
      if (res.isConfirmed) {
        this.maintenanceService.deletePriorityLevel(row.priorityLevelId).subscribe({
          next: () => {
            this.priorityLevels = this.priorityLevels.filter((p) => p.priorityLevelId !== row.priorityLevelId);
            this.filter();
            this.messageService.add({ severity: "success", summary: "Deleted", detail: "Priority level deleted" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Delete failed" })
        });
      }
    });
  }
  deleteSelected() {
    if (!this.selected.length)
      return;
    import_sweetalert211.default.fire({
      title: "Delete Selected",
      text: `Delete ${this.selected.length} level(s)?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((res) => {
      if (res.isConfirmed) {
        const ids = this.selected.map((p) => p.priorityLevelId);
        Promise.all(ids.map((id) => this.maintenanceService.deletePriorityLevel(id).toPromise())).then(() => {
          this.priorityLevels = this.priorityLevels.filter((p) => !ids.includes(p.priorityLevelId));
          this.selected = [];
          this.filter();
          this.messageService.add({ severity: "success", summary: "Deleted", detail: "Selected priority levels deleted" });
        }).catch(() => this.messageService.add({ severity: "error", summary: "Error", detail: "Bulk delete failed" }));
      }
    });
  }
  exportCSV() {
    let csv = "Priority Level,ID\n";
    this.priorityLevels.forEach((p) => csv += `${p.priorityLevelName.replace(/,/g, ";")},${p.priorityLevelId}
`);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "priority-levels.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function MaintenancePriorityLevelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaintenancePriorityLevelComponent)(\u0275\u0275directiveInject(MaintenanceService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaintenancePriorityLevelComponent, selectors: [["app-maintenance-priority-level"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 10, vars: 11, consts: [["start", ""], ["end", ""], ["styleClass", "mb-4"], ["dataKey", "priorityLevelId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} levels", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search levels...", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], [2, "min-width", "25rem"], ["pSortableColumn", "priorityLevelName", 2, "min-width", "20rem"], ["field", "priorityLevelName"], [2, "min-width", "12rem"], [3, "value"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "severity", "info", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", 3, "onClick", "rounded", "text"], ["colspan", "4", 1, "text-center", "py-5"]], template: function MaintenancePriorityLevelComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 2);
      \u0275\u0275template(2, MaintenancePriorityLevelComponent_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, MaintenancePriorityLevelComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275twoWayListener("selectionChange", function MaintenancePriorityLevelComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selected, $event) || (ctx.selected = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("selectionChange", function MaintenancePriorityLevelComponent_Template_p_table_selectionChange_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange());
      });
      \u0275\u0275template(7, MaintenancePriorityLevelComponent_ng_template_7_Template, 10, 0, "ng-template", 4)(8, MaintenancePriorityLevelComponent_ng_template_8_Template, 12, 9, "ng-template", 5)(9, MaintenancePriorityLevelComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filtered)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c011))("loading", ctx.loading)("rowHover", true);
      \u0275\u0275twoWayProperty("selection", ctx.selected);
      \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c111));
    }
  }, dependencies: [CommonModule, TableModule, Table, PrimeTemplate, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, ToolbarModule, Toolbar, InputTextModule, InputText, IconFieldModule, IconField, InputIconModule, InputIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, ToastModule, Toast], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenancePriorityLevelComponent, [{
    type: Component,
    args: [{
      selector: "app-maintenance-priority-level",
      standalone: true,
      imports: [CommonModule, TableModule, ToolbarModule, InputTextModule, IconFieldModule, InputIconModule, FormsModule, ButtonModule, ToastModule],
      providers: [MessageService],
      template: `
        <p-toast />
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNew()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selected.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search levels..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            [value]="filtered"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="priorityLevelId"
            [(selection)]="selected"
            (selectionChange)="onSelectionChange()"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} levels"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="priorityLevelName" style="min-width:20rem">Priority Level <p-sortIcon field="priorityLevelName" /></th>
                    <th style="min-width:12rem">Actions</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row" /></td>
                    <td>{{ row.priorityLevelId }}</td>
                    <td>{{ row.priorityLevelName }}</td>
                    <td>
                        <div class="flex gap-2">
                            <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(row)" />
                            <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(row)" />
                            <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(row)" />
                        </div>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="4" class="text-center py-5">No priority levels found</td>
                </tr>
            </ng-template>
        </p-table>
    `
    }]
  }], () => [{ type: MaintenanceService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaintenancePriorityLevelComponent, { className: "MaintenancePriorityLevelComponent", filePath: "src/app/pages/maintenance/priority-level/maintenance-priority-level.ts", lineNumber: 83 });
})();

// src/app/pages/maintenance/types/maintenance-types.ts
var import_sweetalert212 = __toESM(require_sweetalert2_all());
var _c012 = () => [10, 20, 30];
var _c112 = () => ({ "min-width": "70rem" });
function MaintenanceTypesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 8);
    \u0275\u0275listener("onClick", function MaintenanceTypesComponent_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 9);
    \u0275\u0275listener("onClick", function MaintenanceTypesComponent_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteSelected());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selected.length);
  }
}
function MaintenanceTypesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p-button", 10);
    \u0275\u0275listener("onClick", function MaintenanceTypesComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 11);
    \u0275\u0275elementStart(4, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function MaintenanceTypesComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function MaintenanceTypesComponent_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function MaintenanceTypesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 13);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 14);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 15);
    \u0275\u0275text(6, "Type Name ");
    \u0275\u0275element(7, "p-sortIcon", 16);
    \u0275\u0275elementEnd()();
  }
}
function MaintenanceTypesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "p-tableCheckbox", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.maintenanceTypeId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.maintenanceTypeName);
  }
}
function MaintenanceTypesComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 18);
    \u0275\u0275text(2, "No maintenance types found");
    \u0275\u0275elementEnd()();
  }
}
var MaintenanceTypesComponent = class _MaintenanceTypesComponent {
  maintenanceService;
  messageService;
  types = [];
  filtered = [];
  selected = [];
  loading = false;
  searchValue = "";
  constructor(maintenanceService, messageService) {
    this.maintenanceService = maintenanceService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.maintenanceService.getMaintenanceTypes().subscribe({
      next: (data) => {
        this.types = data || [];
        this.filtered = [...this.types];
        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading maintenance types", err);
        this.loading = false;
      }
    });
  }
  filter() {
    const q = this.searchValue.toLowerCase();
    this.filtered = this.types.filter((t) => t.maintenanceTypeName.toLowerCase().includes(q));
  }
  onSelectionChange() {
  }
  openNew() {
    import_sweetalert212.default.fire({
      title: "New Maintenance Type",
      html: `<input id="mtName" class="swal2-input" placeholder="Type Name" />`,
      confirmButtonText: "Create",
      showCancelButton: true,
      preConfirm: () => {
        const name = document.getElementById("mtName").value.trim();
        if (!name) {
          import_sweetalert212.default.showValidationMessage("Type name is required");
          return false;
        }
        return { maintenanceTypeName: name };
      }
    }).then((res) => {
      if (res.isConfirmed && res.value) {
        this.maintenanceService.createMaintenanceType(res.value).subscribe({
          next: (created) => {
            this.types.push(created);
            this.filter();
            this.messageService.add({ severity: "success", summary: "Created", detail: "Type created" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Create failed" })
        });
      }
    });
  }
  view(row) {
    import_sweetalert212.default.fire({ title: "Maintenance Type", text: row.maintenanceTypeName });
  }
  edit(row) {
    import_sweetalert212.default.fire({
      title: "Edit Maintenance Type",
      html: `<input id="mtName" class="swal2-input" value="${row.maintenanceTypeName}" />`,
      confirmButtonText: "Update",
      showCancelButton: true,
      preConfirm: () => {
        const name = document.getElementById("mtName").value.trim();
        if (!name) {
          import_sweetalert212.default.showValidationMessage("Type name is required");
          return false;
        }
        return { maintenanceTypeName: name };
      }
    }).then((res) => {
      if (res.isConfirmed && res.value) {
        this.maintenanceService.updateMaintenanceType(row.maintenanceTypeId, res.value).subscribe({
          next: (updated) => {
            const idx = this.types.findIndex((t) => t.maintenanceTypeId === updated.maintenanceTypeId);
            if (idx > -1)
              this.types[idx] = updated;
            this.filter();
            this.messageService.add({ severity: "success", summary: "Updated", detail: "Type updated" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Update failed" })
        });
      }
    });
  }
  delete(row) {
    import_sweetalert212.default.fire({
      title: "Delete Maintenance Type",
      text: `Delete "${row.maintenanceTypeName}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((res) => {
      if (res.isConfirmed) {
        this.maintenanceService.deleteMaintenanceType(row.maintenanceTypeId).subscribe({
          next: () => {
            this.types = this.types.filter((t) => t.maintenanceTypeId !== row.maintenanceTypeId);
            this.filter();
            this.messageService.add({ severity: "success", summary: "Deleted", detail: "Type deleted" });
          },
          error: () => this.messageService.add({ severity: "error", summary: "Error", detail: "Delete failed" })
        });
      }
    });
  }
  deleteSelected() {
    if (!this.selected.length)
      return;
    import_sweetalert212.default.fire({
      title: "Delete Selected",
      text: `Delete ${this.selected.length} type(s)?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete"
    }).then((res) => {
      if (res.isConfirmed) {
        const ids = this.selected.map((t) => t.maintenanceTypeId);
        Promise.all(ids.map((id) => this.maintenanceService.deleteMaintenanceType(id).toPromise())).then(() => {
          this.types = this.types.filter((t) => !ids.includes(t.maintenanceTypeId));
          this.selected = [];
          this.filter();
          this.messageService.add({ severity: "success", summary: "Deleted", detail: "Selected types deleted" });
        }).catch(() => this.messageService.add({ severity: "error", summary: "Error", detail: "Bulk delete failed" }));
      }
    });
  }
  exportCSV() {
    let csv = "Type Name,ID\n";
    this.types.forEach((t) => csv += `${t.maintenanceTypeName.replace(/,/g, ";")},${t.maintenanceTypeId}
`);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "maintenance-types.csv";
    a.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function MaintenanceTypesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaintenanceTypesComponent)(\u0275\u0275directiveInject(MaintenanceService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaintenanceTypesComponent, selectors: [["app-maintenance-types"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 10, vars: 11, consts: [["start", ""], ["end", ""], ["styleClass", "mb-4"], ["dataKey", "maintenanceTypeId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} types", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search types...", 3, "ngModelChange", "input", "ngModel"], [2, "width", "3rem"], [2, "min-width", "25rem"], ["pSortableColumn", "maintenanceTypeName", 2, "min-width", "20rem"], ["field", "maintenanceTypeName"], [3, "value"], ["colspan", "3", 1, "text-center", "py-5"]], template: function MaintenanceTypesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 2);
      \u0275\u0275template(2, MaintenanceTypesComponent_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, MaintenanceTypesComponent_ng_template_4_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p-table", 3);
      \u0275\u0275twoWayListener("selectionChange", function MaintenanceTypesComponent_Template_p_table_selectionChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selected, $event) || (ctx.selected = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("selectionChange", function MaintenanceTypesComponent_Template_p_table_selectionChange_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectionChange());
      });
      \u0275\u0275template(7, MaintenanceTypesComponent_ng_template_7_Template, 8, 0, "ng-template", 4)(8, MaintenanceTypesComponent_ng_template_8_Template, 7, 3, "ng-template", 5)(9, MaintenanceTypesComponent_ng_template_9_Template, 3, 0, "ng-template", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.filtered)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c012))("loading", ctx.loading)("rowHover", true);
      \u0275\u0275twoWayProperty("selection", ctx.selected);
      \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c112));
    }
  }, dependencies: [CommonModule, TableModule, Table, PrimeTemplate, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, ToolbarModule, Toolbar, InputTextModule, InputText, IconFieldModule, IconField, InputIconModule, InputIcon, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, ToastModule, Toast], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenanceTypesComponent, [{
    type: Component,
    args: [{
      selector: "app-maintenance-types",
      standalone: true,
      imports: [CommonModule, TableModule, ToolbarModule, InputTextModule, IconFieldModule, InputIconModule, FormsModule, ButtonModule, ToastModule],
      providers: [MessageService],
      template: `
        <p-toast />
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNew()" />
                    <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selected.length" />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                    <p-iconfield>
                        <p-inputicon styleClass="pi pi-search" />
                        <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search types..." />
                    </p-iconfield>
                </div>
            </ng-template>
        </p-toolbar>
        <p-table
            [value]="filtered"
            [rows]="10"
            [paginator]="true"
            [rowsPerPageOptions]="[10, 20, 30]"
            [loading]="loading"
            [rowHover]="true"
            dataKey="maintenanceTypeId"
            [(selection)]="selected"
            (selectionChange)="onSelectionChange()"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} types"
            [showCurrentPageReport]="true"
            [tableStyle]="{ 'min-width': '70rem' }"
        >
            <ng-template pTemplate="header">
                <tr>
                    <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                    <th style="min-width:25rem">ID</th>
                    <th pSortableColumn="maintenanceTypeName" style="min-width:20rem">Type Name <p-sortIcon field="maintenanceTypeName" /></th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-row>
                <tr>
                    <td><p-tableCheckbox [value]="row"></p-tableCheckbox></td>
                    <td>{{ row.maintenanceTypeId }}</td>
                    <td>{{ row.maintenanceTypeName }}</td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="3" class="text-center py-5">No maintenance types found</td>
                </tr>
            </ng-template>
        </p-table>
    `
    }]
  }], () => [{ type: MaintenanceService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaintenanceTypesComponent, { className: "MaintenanceTypesComponent", filePath: "src/app/pages/maintenance/types/maintenance-types.ts", lineNumber: 75 });
})();

// src/app/pages/labschedule/labschedule.ts
var _c013 = ["dt"];
var _c113 = () => ({ width: "500px" });
var _c25 = () => ({ width: "50vw" });
var _c3 = () => ({ "960px": "75vw", "640px": "90vw" });
function LabScheduleComponent_ng_template_2_p_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 23);
    \u0275\u0275listener("onClick", function LabScheduleComponent_ng_template_2_p_button_1_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
  }
}
function LabScheduleComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, LabScheduleComponent_ng_template_2_p_button_1_Template, 1, 0, "p-button", 21);
    \u0275\u0275element(2, "p-button", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isCampusAdmin && !ctx_r2.isSuperAdmin);
  }
}
function LabScheduleComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "label", 24);
    \u0275\u0275text(2, "Filter by Laboratory:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function LabScheduleComponent_ng_template_4_Template_p_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedLaboratory, $event) || (ctx_r2.selectedLaboratory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function LabScheduleComponent_ng_template_4_Template_p_select_onChange_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLaboratoryFilterChange());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedLaboratory);
    \u0275\u0275property("options", ctx_r2.laboratories)("showClear", true);
  }
}
function LabScheduleComponent_tr_28_td_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275listener("click", function LabScheduleComponent_tr_28_td_3_div_1_Template_div_click_0_listener() {
      const schedule_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.viewSchedule(schedule_r6));
    });
    \u0275\u0275elementStart(1, "div", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const schedule_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("grid-row", "span " + ctx_r2.getRowSpan(schedule_r6))("min-height", ctx_r2.getRowSpan(schedule_r6) * 60, "px");
    \u0275\u0275property("ngClass", "schedule-block " + ctx_r2.getScheduleColor(schedule_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(schedule_r6.subject == null ? null : schedule_r6.subject.subjectCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", schedule_r6.faculty == null ? null : schedule_r6.faculty.firstName, " ", schedule_r6.faculty == null ? null : schedule_r6.faculty.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", schedule_r6.startTime, " - ", schedule_r6.endTime);
  }
}
function LabScheduleComponent_tr_28_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275template(1, LabScheduleComponent_tr_28_td_3_div_1_Template, 7, 10, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const timeIndex_r8 = \u0275\u0275nextContext().index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.getSchedulesStartingAtSlot(timeIndex_r8, day_r7));
  }
}
function LabScheduleComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LabScheduleComponent_tr_28_td_3_Template, 2, 1, "td", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const timeSlot_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(timeSlot_r9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.daysOfWeek);
  }
}
function LabScheduleComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 13)(2, "label", 14);
    \u0275\u0275text(3, "Laboratory *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-select", 35);
    \u0275\u0275twoWayListener("ngModelChange", function LabScheduleComponent_ng_template_30_Template_p_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSchedule.laboratory, $event) || (ctx_r2.newSchedule.laboratory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 13)(6, "label", 14);
    \u0275\u0275text(7, "Instructor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function LabScheduleComponent_ng_template_30_Template_p_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSchedule.instructor, $event) || (ctx_r2.newSchedule.instructor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 16)(10, "label", 14);
    \u0275\u0275text(11, "Day *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p-select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function LabScheduleComponent_ng_template_30_Template_p_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSchedule.day, $event) || (ctx_r2.newSchedule.day = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 16)(14, "label", 14);
    \u0275\u0275text(15, "Subject *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 38)(17, "p-select", 39);
    \u0275\u0275twoWayListener("ngModelChange", function LabScheduleComponent_ng_template_30_Template_p_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSchedule.activity, $event) || (ctx_r2.newSchedule.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p-button", 40);
    \u0275\u0275listener("click", function LabScheduleComponent_ng_template_30_Template_p_button_click_18_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCreateSubjectDialog());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 16)(20, "label", 14);
    \u0275\u0275text(21, "Time *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function LabScheduleComponent_ng_template_30_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSchedule.time, $event) || (ctx_r2.newSchedule.time = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 16)(24, "label", 14);
    \u0275\u0275text(25, "End Time *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function LabScheduleComponent_ng_template_30_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newSchedule.endTime, $event) || (ctx_r2.newSchedule.endTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSchedule.laboratory);
    \u0275\u0275property("options", ctx_r2.laboratories);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSchedule.instructor);
    \u0275\u0275property("options", ctx_r2.users)("showClear", true);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSchedule.day);
    \u0275\u0275property("options", ctx_r2.daysOfWeek);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSchedule.activity);
    \u0275\u0275property("options", ctx_r2.subjects);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSchedule.time);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newSchedule.endTime);
  }
}
function LabScheduleComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "p-button", 43);
    \u0275\u0275listener("click", function LabScheduleComponent_ng_template_32_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 44);
    \u0275\u0275listener("click", function LabScheduleComponent_ng_template_32_Template_p_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveSchedule());
    });
    \u0275\u0275elementEnd()();
  }
}
function LabScheduleComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "p-button", 43);
    \u0275\u0275listener("click", function LabScheduleComponent_ng_template_52_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeSubjectDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 45);
    \u0275\u0275listener("click", function LabScheduleComponent_ng_template_52_Template_p_button_click_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveSubject());
    });
    \u0275\u0275elementEnd()();
  }
}
var LabScheduleComponent = class _LabScheduleComponent {
  messageService;
  http;
  authService;
  dt;
  // Schedule data
  schedules = [];
  timeSlots = [];
  daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  laboratories = [];
  users = [];
  subjects = [];
  selectedLaboratory = null;
  isCampusAdmin = false;
  isSuperAdmin = false;
  // Dialog state
  scheduleDialog = false;
  newSchedule = this.getEmptySchedule();
  subjectDialog = false;
  newSubject = this.getEmptySubject();
  apiUrl = `${environment.apiUrl}/laboratories`;
  constructor(messageService, http, authService) {
    this.messageService = messageService;
    this.http = http;
    this.authService = authService;
  }
  ngOnInit() {
    this.initializeTimeSlots();
    this.checkUserRole();
    this.loadLaboratories();
    this.loadUsers();
    this.loadSubjects();
    this.loadSchedules();
  }
  checkUserRole() {
    const currentUser = this.authService.getCurrentUser();
    this.isCampusAdmin = currentUser?.role === "CampusAdmin";
    this.isSuperAdmin = currentUser?.role === "SuperAdmin";
    console.log("\u{1F464} Current user role:", currentUser?.role, "Is CampusAdmin:", this.isCampusAdmin, "Is SuperAdmin:", this.isSuperAdmin);
  }
  // Initialize time slots from 07:00 AM to 09:00 PM (30-minute intervals)
  initializeTimeSlots() {
    const startHour = 7;
    const endHour = 21;
    const slots = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const ampm = hour >= 12 ? "PM" : "AM";
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        const timeString = `${String(displayHour).padStart(2, "0")}:${String(minute).padStart(2, "0")} ${ampm}`;
        slots.push(timeString);
      }
    }
    this.timeSlots = slots;
  }
  getEmptySchedule() {
    return {
      id: "",
      laboratory: "",
      day: "",
      time: "",
      endTime: "",
      activity: "",
      instructor: "",
      color: "#1f2937"
    };
  }
  getEmptySubject() {
    return {
      subjectName: "",
      subjectCode: "",
      numberOfStudents: 0,
      units: ""
    };
  }
  loadLaboratories() {
    console.log("\u{1F4E1} Fetching laboratories from:", this.apiUrl);
    this.http.get(this.apiUrl).subscribe({
      next: (data) => {
        console.log("\u2705 Laboratories loaded:", data);
        this.laboratories = data || [];
        if (this.laboratories.length > 0) {
          this.selectedLaboratory = this.laboratories[0];
          this.onLaboratoryFilterChange();
        }
      },
      error: (error) => {
        console.error("\u274C Error loading laboratories:", error);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load laboratories: " + (error?.error?.message || error?.message)
        });
      }
    });
  }
  loadUsers() {
    const usersUrl = `${environment.apiUrl}/users`;
    console.log("\u{1F4E1} Fetching users from:", usersUrl);
    this.http.get(usersUrl).subscribe({
      next: (data) => {
        console.log("\u2705 Users loaded:", data);
        console.log("\u{1F4CA} Total users:", data?.length || 0);
        if (data && data.length > 0) {
          console.log("\u{1F464} First user:", data[0]);
          console.log("\u{1F465} User fields:", Object.keys(data[0]));
          console.table(data);
        }
        this.users = data || [];
      },
      error: (error) => {
        console.error("\u274C Error loading users:", error);
        console.error("Error status:", error?.status);
        console.error("Error message:", error?.message);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load users: " + (error?.error?.message || error?.message)
        });
      }
    });
  }
  loadSubjects() {
    const subjectsUrl = `${environment.apiUrl}/subjects`;
    console.log("\u{1F4E1} Fetching subjects from:", subjectsUrl);
    this.http.get(subjectsUrl).subscribe({
      next: (data) => {
        console.log("\u2705 Subjects loaded:", data);
        console.log("\u{1F4CA} Total subjects:", data?.length || 0);
        if (data && data.length > 0) {
          console.log("\u{1F4DA} First subject:", data[0]);
          console.log("\u{1F4DA} Subject fields:", Object.keys(data[0]));
          console.table(data);
        }
        this.subjects = data || [];
      },
      error: (error) => {
        console.error("\u274C Error loading subjects:", error);
        console.error("Error status:", error?.status);
        console.error("Error message:", error?.message);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load subjects: " + (error?.error?.message || error?.message)
        });
      }
    });
  }
  onLaboratoryFilterChange() {
    if (this.selectedLaboratory) {
      console.log("\u{1F50D} Filtering schedule for laboratory:", this.selectedLaboratory);
      console.log("\u{1F4CB} Laboratory ID:", this.selectedLaboratory.laboratoryId);
      this.messageService.add({
        severity: "info",
        summary: "Filter Applied",
        detail: `Showing schedules for: ${this.selectedLaboratory.laboratoryName}`
      });
    } else {
      console.log("\u{1F50D} Showing all laboratory schedules");
      this.messageService.add({
        severity: "info",
        summary: "Filter Cleared",
        detail: "Showing all laboratory schedules"
      });
    }
    this.loadSchedules();
  }
  loadSchedules() {
    if (!this.selectedLaboratory) {
      console.log("\u26A0\uFE0F No laboratory selected");
      this.schedules = [];
      return;
    }
    const scheduleUrl = `${environment.apiUrl}/laboratories/${this.selectedLaboratory.laboratoryId}/schedules`;
    console.log("\u{1F4E1} Fetching schedules from:", scheduleUrl);
    this.http.get(scheduleUrl).subscribe({
      next: (data) => {
        console.log("\u2705 Schedules API Response:", data);
        console.log("\u{1F4CA} Total schedules:", data?.length || 0);
        if (data && data.length > 0) {
          console.log("\u{1F3AF} First schedule:", data[0]);
          console.log("\u{1F4CB} Schedule fields:", Object.keys(data[0]));
          console.table(data);
        }
        this.schedules = data || [];
      },
      error: (error) => {
        console.error("\u274C Error loading schedules:", error);
        console.error("Error status:", error?.status);
        console.error("Error message:", error?.message);
        console.error("Error details:", error?.error);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load schedules: " + (error?.error?.message || error?.message)
        });
        this.schedules = [];
      }
    });
  }
  openNew() {
    this.newSchedule = this.getEmptySchedule();
    this.scheduleDialog = true;
  }
  closeDialog() {
    this.scheduleDialog = false;
    this.newSchedule = this.getEmptySchedule();
  }
  openCreateSubjectDialog() {
    this.newSubject = this.getEmptySubject();
    this.subjectDialog = true;
  }
  closeSubjectDialog() {
    this.subjectDialog = false;
    this.newSubject = this.getEmptySubject();
  }
  saveSubject() {
    if (!this.newSubject.subjectName || !this.newSubject.subjectCode || !this.newSubject.units) {
      this.messageService.add({
        severity: "warn",
        summary: "Validation",
        detail: "Subject Name, Code, and Units are required"
      });
      return;
    }
    const payload = {
      subjectName: this.newSubject.subjectName,
      subjectCode: this.newSubject.subjectCode,
      numberOfStudents: this.newSubject.numberOfStudents || 0,
      units: this.newSubject.units
    };
    const subjectsUrl = `${environment.apiUrl}/subjects`;
    console.log("\u{1F4E1} Posting new subject to:", subjectsUrl, payload);
    this.http.post(subjectsUrl, payload).subscribe({
      next: (response) => {
        console.log("\u2705 Subject created successfully:", response);
        this.messageService.add({
          severity: "success",
          summary: "Success",
          detail: `Subject "${this.newSubject.subjectName}" created successfully`
        });
        this.closeSubjectDialog();
        this.loadSubjects();
      },
      error: (error) => {
        console.error("\u274C Error creating subject:", error);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to create subject: " + (error?.error?.message || error?.message)
        });
      }
    });
  }
  saveSchedule() {
    if (!this.newSchedule.laboratory || !this.newSchedule.day || !this.newSchedule.time || !this.newSchedule.endTime || !this.newSchedule.activity) {
      this.messageService.add({
        severity: "warn",
        summary: "Validation",
        detail: "Laboratory, Day, Start Time, End Time, and Subject are required"
      });
      return;
    }
    const payload = {
      faculty: this.newSchedule.instructor || "",
      subject: this.newSchedule.activity,
      startTime: this.newSchedule.time,
      endTime: this.newSchedule.endTime,
      dayOfWeek: this.newSchedule.day
    };
    console.log("\u{1F4E4} Saving schedule with payload:", payload);
    console.log("\u{1F517} Laboratory ID:", this.newSchedule.laboratory);
    const scheduleUrl = `${environment.apiUrl}/laboratories/${this.newSchedule.laboratory}/schedules`;
    console.log("\u{1F4E1} Posting to:", scheduleUrl);
    this.http.post(scheduleUrl, payload).subscribe({
      next: (response) => {
        console.log("\u2705 Schedule created successfully:", response);
        this.messageService.add({
          severity: "success",
          summary: "Success",
          detail: "Lab schedule created successfully"
        });
        this.closeDialog();
        this.loadSchedules();
      },
      error: (error) => {
        console.error("\u274C Error creating schedule:", error);
        console.error("Error status:", error?.status);
        console.error("Error message:", error?.message);
        console.error("Error details:", error?.error);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to create schedule: " + (error?.error?.message || error?.message)
        });
      }
    });
  }
  view(schedule) {
    this.messageService.add({
      severity: "info",
      summary: "View Schedule",
      detail: `Viewing: ${schedule.activity}`
    });
  }
  edit(schedule) {
    this.newSchedule = __spreadValues({}, schedule);
    this.scheduleDialog = true;
  }
  delete(schedule) {
    this.messageService.add({
      severity: "warn",
      summary: "Delete Schedule",
      detail: `Delete: ${schedule.activity}?`
    });
  }
  // Convert time string (HH:MM) to minutes for comparison
  timeToMinutes(timeString) {
    if (!timeString)
      return 0;
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  }
  // Extract time from time slot string (e.g., "07:00 AM" -> 420)
  timeSlotToMinutes(timeSlot) {
    const match = timeSlot.match(/(\d{2}):(\d{2})\s(AM|PM)/);
    if (!match)
      return 0;
    let hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const ampm = match[3];
    if (ampm === "PM" && hours !== 12) {
      hours += 12;
    } else if (ampm === "AM" && hours === 12) {
      hours = 0;
    }
    return hours * 60 + minutes;
  }
  // Get schedules that START at a specific time slot and day (for card display)
  getSchedulesStartingAtSlot(timeIndex, day) {
    if (!this.schedules || this.schedules.length === 0) {
      return [];
    }
    const timeSlot = this.timeSlots[timeIndex];
    const slotMinutes = this.timeSlotToMinutes(timeSlot);
    return this.schedules.filter((schedule) => {
      if (schedule.dayOfWeek !== day) {
        return false;
      }
      const startMinutes = this.timeToMinutes(schedule.startTime);
      const roundedStartMinutes = Math.floor(startMinutes / 30) * 30;
      return slotMinutes === roundedStartMinutes;
    });
  }
  // Get schedules that occupy a specific time slot and day
  getSchedulesForCell(timeIndex, day) {
    if (!this.schedules || this.schedules.length === 0) {
      return [];
    }
    const timeSlot = this.timeSlots[timeIndex];
    const slotMinutes = this.timeSlotToMinutes(timeSlot);
    return this.schedules.filter((schedule) => {
      if (schedule.dayOfWeek !== day) {
        return false;
      }
      const startMinutes = this.timeToMinutes(schedule.startTime);
      const endMinutes = this.timeToMinutes(schedule.endTime);
      return slotMinutes >= startMinutes && slotMinutes < endMinutes;
    });
  }
  // Calculate how many rows a schedule should span (30-min intervals)
  getRowSpan(schedule) {
    const startMinutes = this.timeToMinutes(schedule.startTime);
    const endMinutes = this.timeToMinutes(schedule.endTime);
    const durationMinutes = endMinutes - startMinutes;
    const rowSpan = Math.ceil(durationMinutes / 30);
    console.log(`\u{1F4CF} Schedule: ${schedule.subject?.subjectCode} | Start: ${schedule.startTime} (${startMinutes}min) | End: ${schedule.endTime} (${endMinutes}min) | Duration: ${durationMinutes}min | Rows: ${rowSpan}`);
    return rowSpan;
  }
  // Get color class for schedule based on subject
  getScheduleColor(schedule) {
    const colors = ["bg-green-500", "bg-pink-500", "bg-gray-700", "bg-blue-600", "bg-cyan-500", "bg-yellow-500", "bg-indigo-600"];
    if (schedule.subject && schedule.subject.subjectId) {
      const hashCode = schedule.subject.subjectId.charCodeAt(0);
      return colors[hashCode % colors.length];
    }
    return colors[0];
  }
  // View schedule details
  viewSchedule(schedule) {
    console.log("\u{1F441}\uFE0F Viewing schedule:", schedule);
    this.messageService.add({
      severity: "info",
      summary: "Schedule Details",
      detail: `${schedule.subject?.subjectName} - ${schedule.faculty?.firstName} ${schedule.faculty?.lastName}`
    });
  }
  static \u0275fac = function LabScheduleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LabScheduleComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LabScheduleComponent, selectors: [["app-labschedule"]], viewQuery: function LabScheduleComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c013, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 54, vars: 21, consts: [["start", ""], ["end", ""], ["content", ""], ["footer", ""], ["styleClass", "mb-4"], [1, "lab-schedule-container"], [1, "schedule-table-wrapper"], [1, "schedule-table"], [1, "time-column"], [4, "ngFor", "ngForOf"], ["header", "Add Lab Schedule", 3, "visibleChange", "onHide", "visible", "modal", "closable"], [3, "visibleChange", "visible", "header", "modal", "breakpoints", "closable"], [1, "grid", "grid-cols-12", "gap-4", "mb-4"], [1, "col-span-12"], [1, "block", "font-bold", "mb-2"], ["pInputText", "", "type", "text", "placeholder", "Enter subject name", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "col-span-6"], ["pInputText", "", "type", "text", "placeholder", "e.g., CS101", 1, "w-full", 3, "ngModelChange", "ngModel"], ["pInputText", "", "type", "text", "placeholder", "e.g., 3", 1, "w-full", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter number of students", 1, "w-full", 3, "ngModelChange", "ngModel", "min"], [1, "flex", "items-center", "gap-2"], ["label", "New Schedule", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick", 4, "ngIf"], ["label", "Print", "icon", "pi pi-print", "severity", "secondary", "outlined", ""], ["label", "New Schedule", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], [1, "font-semibold", "mr-2"], ["optionLabel", "laboratoryName", "placeholder", "All Laboratories", "styleClass", "w-64", "appendTo", "body", 3, "ngModelChange", "onChange", "ngModel", "options", "showClear"], [1, "time-cell"], ["class", "schedule-cell", 4, "ngFor", "ngForOf"], [1, "schedule-cell"], ["class", "p-3 rounded cursor-pointer hover:opacity-80 transition-opacity text-white flex flex-col items-center justify-center", 3, "ngClass", "grid-row", "min-height", "click", 4, "ngFor", "ngForOf"], [1, "p-3", "rounded", "cursor-pointer", "hover:opacity-80", "transition-opacity", "text-white", "flex", "flex-col", "items-center", "justify-center", 3, "click", "ngClass"], [1, "text-sm", "font-bold"], [1, "text-xs", "mt-1"], [1, "text-xs", "mt-1", "font-semibold"], [1, "grid", "grid-cols-12", "gap-4", "mt-2"], ["optionLabel", "laboratoryName", "optionValue", "laboratoryId", "placeholder", "Select laboratory", "appendTo", "body", 1, "w-full", 3, "ngModelChange", "ngModel", "options"], ["optionLabel", "firstName", "optionValue", "userId", "placeholder", "Select instructor", "appendTo", "body", 1, "w-full", 3, "ngModelChange", "ngModel", "options", "showClear"], ["placeholder", "Select day", "appendTo", "body", 1, "w-full", 3, "ngModelChange", "ngModel", "options"], [1, "flex", "gap-2"], ["optionLabel", "subjectName", "optionValue", "subjectId", "placeholder", "Select subject", "appendTo", "body", 1, "flex-1", 3, "ngModelChange", "ngModel", "options"], ["icon", "pi pi-plus", "severity", "secondary", "pTooltip", "Create new subject", "tooltipPosition", "top", 3, "click"], ["pInputText", "", "type", "time", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-2", "w-full"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", "text", "", 3, "click"], ["label", "Save", "icon", "pi pi-check", 3, "click"], ["label", "Create", "icon", "pi pi-check", 3, "click"]], template: function LabScheduleComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 4);
      \u0275\u0275template(2, LabScheduleComponent_ng_template_2_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, LabScheduleComponent_ng_template_4_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "table", 7)(9, "thead")(10, "tr")(11, "th", 8);
      \u0275\u0275text(12, "Time & Days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "th");
      \u0275\u0275text(14, "Sunday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "th");
      \u0275\u0275text(16, "Monday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "th");
      \u0275\u0275text(18, "Tuesday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "th");
      \u0275\u0275text(20, "Wednesday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th");
      \u0275\u0275text(22, "Thursday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Friday");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Saturday");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "tbody");
      \u0275\u0275template(28, LabScheduleComponent_tr_28_Template, 4, 2, "tr", 9);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "p-dialog", 10);
      \u0275\u0275twoWayListener("visibleChange", function LabScheduleComponent_Template_p_dialog_visibleChange_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.scheduleDialog, $event) || (ctx.scheduleDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onHide", function LabScheduleComponent_Template_p_dialog_onHide_29_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275template(30, LabScheduleComponent_ng_template_30_Template, 27, 11, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(32, LabScheduleComponent_ng_template_32_Template, 3, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p-dialog", 11);
      \u0275\u0275twoWayListener("visibleChange", function LabScheduleComponent_Template_p_dialog_visibleChange_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.subjectDialog, $event) || (ctx.subjectDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(35, "div", 12)(36, "div", 13)(37, "label", 14);
      \u0275\u0275text(38, "Subject Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function LabScheduleComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newSubject.subjectName, $event) || (ctx.newSubject.subjectName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 16)(41, "label", 14);
      \u0275\u0275text(42, "Subject Code *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function LabScheduleComponent_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newSubject.subjectCode, $event) || (ctx.newSubject.subjectCode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 16)(45, "label", 14);
      \u0275\u0275text(46, "Units *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function LabScheduleComponent_Template_input_ngModelChange_47_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newSubject.units, $event) || (ctx.newSubject.units = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 13)(49, "label", 14);
      \u0275\u0275text(50, "Number of Students");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p-inputNumber", 19);
      \u0275\u0275twoWayListener("ngModelChange", function LabScheduleComponent_Template_p_inputNumber_ngModelChange_51_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.newSubject.numberOfStudents, $event) || (ctx.newSubject.numberOfStudents = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(52, LabScheduleComponent_ng_template_52_Template, 3, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(28);
      \u0275\u0275property("ngForOf", ctx.timeSlots);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(18, _c113));
      \u0275\u0275twoWayProperty("visible", ctx.scheduleDialog);
      \u0275\u0275property("modal", true)("closable", true);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(19, _c25));
      \u0275\u0275twoWayProperty("visible", ctx.subjectDialog);
      \u0275\u0275property("header", "Create New Subject")("modal", true)("breakpoints", \u0275\u0275pureFunction0(20, _c3))("closable", true);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.newSubject.subjectName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.newSubject.subjectCode);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.newSubject.units);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.newSubject.numberOfStudents);
      \u0275\u0275property("min", 0);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    TableModule,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    ButtonModule,
    Button,
    RippleModule,
    ToastModule,
    Toast,
    ToolbarModule,
    Toolbar,
    InputTextModule,
    InputText,
    TagModule,
    InputIconModule,
    IconFieldModule,
    TooltipModule,
    Tooltip,
    DialogModule,
    Dialog,
    SelectModule,
    Select,
    InputNumberModule,
    InputNumber,
    TextareaModule,
    DatePickerModule
  ], styles: ['\n\n.lab-schedule-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background: #f3f4f6;\n  border-radius: 0.375rem;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  color: #1f2937;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  background: white;\n  border-radius: 0.375rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 120px repeat(7, 1fr);\n  grid-auto-rows: 60px;\n  gap: 0;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  display: contents;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: contents;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: var(--primary-contrast-color);\n  padding: 1rem;\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n  border: 1px solid #e5e7eb;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  min-width: 120px;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  display: contents;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: contents;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 1px solid #e5e7eb;\n  position: relative;\n  vertical-align: top;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.time-cell[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: #374151;\n  border-right: 2px solid #d1d5db;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: sticky;\n  left: 0;\n  z-index: 5;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  overflow: visible;\n  position: relative;\n  padding: 2px;\n  display: grid;\n  grid-auto-rows: 60px;\n  grid-auto-flow: row;\n  align-content: start;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell[_ngcontent-%COMP%]   .schedule-block[_ngcontent-%COMP%] {\n  width: calc(100% - 4px);\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.375rem;\n  position: relative;\n  z-index: 20;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  box-sizing: border-box;\n  border-radius: 0.375rem;\n  position: relative;\n  z-index: 20;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell[_ngcontent-%COMP%]   .schedule-block[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  z-index: 25;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell[_ngcontent-%COMP%]   .schedule-block[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 0.125rem;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell[_ngcontent-%COMP%]   .schedule-block[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  opacity: 0.95;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell.bg-green-500[_ngcontent-%COMP%] {\n  background-color: #10b981;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell.bg-pink-500[_ngcontent-%COMP%] {\n  background-color: #ec4899;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell.bg-gray-700[_ngcontent-%COMP%] {\n  background-color: #374151;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell.bg-blue-600[_ngcontent-%COMP%] {\n  background-color: #2563eb;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell.bg-cyan-500[_ngcontent-%COMP%] {\n  background-color: #06b6d4;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell.bg-yellow-500[_ngcontent-%COMP%] {\n  background-color: #eab308;\n  color: #1f2937;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell.bg-yellow-500[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%] {\n  color: #1f2937;\n}\n.lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell.bg-indigo-600[_ngcontent-%COMP%] {\n  background-color: #4f46e5;\n}\n@media (max-width: 1024px) {\n  .lab-schedule-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%] {\n    font-size: 0.8125rem;\n  }\n  .lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n    font-size: 0.8125rem;\n  }\n  .lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.375rem;\n    height: 50px;\n  }\n  .lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.time-cell[_ngcontent-%COMP%] {\n    min-width: 100px;\n    font-size: 0.75rem;\n  }\n  .lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell[_ngcontent-%COMP%]   .schedule-block[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n  }\n  .lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell[_ngcontent-%COMP%]   .schedule-block[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n}\n@media (max-width: 768px) {\n  .lab-schedule-container[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .lab-schedule-container[_ngcontent-%COMP%]   .schedule-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n  }\n  .lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.25rem;\n    font-size: 0.75rem;\n  }\n  .lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.25rem;\n    height: 40px;\n  }\n  .lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.time-cell[_ngcontent-%COMP%] {\n    min-width: 80px;\n    font-size: 0.7rem;\n    padding: 0.25rem;\n  }\n  .lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell[_ngcontent-%COMP%]   .schedule-block[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    padding: 0.125rem 0.25rem;\n  }\n  .lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell[_ngcontent-%COMP%]   .schedule-block[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .lab-schedule-container[_ngcontent-%COMP%]   .schedule-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td.schedule-cell[_ngcontent-%COMP%]   .schedule-block[_ngcontent-%COMP%]   .block-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=_labschedule-component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabScheduleComponent, [{
    type: Component,
    args: [{ selector: "app-labschedule", standalone: true, imports: [
      CommonModule,
      TableModule,
      FormsModule,
      ButtonModule,
      RippleModule,
      ToastModule,
      ToolbarModule,
      InputTextModule,
      TagModule,
      InputIconModule,
      IconFieldModule,
      TooltipModule,
      DialogModule,
      SelectModule,
      InputNumberModule,
      TextareaModule,
      DatePickerModule
    ], providers: [MessageService], template: `
        <p-toast />

        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <p-button label="New Schedule" icon="pi pi-plus" severity="secondary" (onClick)="openNew()" *ngIf="!isCampusAdmin && !isSuperAdmin" />
                    <p-button label="Print" icon="pi pi-print" severity="secondary" outlined />
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-2">
                    <label class="font-semibold mr-2">Filter by Laboratory:</label>
                    <p-select [(ngModel)]="selectedLaboratory" [options]="laboratories" optionLabel="laboratoryName" placeholder="All Laboratories" [showClear]="true" styleClass="w-64" appendTo="body" (onChange)="onLaboratoryFilterChange()" />
                </div>
            </ng-template>
        </p-toolbar>

        <div class="lab-schedule-container">
            <div class="schedule-table-wrapper">
                <table class="schedule-table">
                    <thead>
                        <tr>
                            <th class="time-column">Time & Days</th>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let timeSlot of timeSlots; let timeIndex = index">
                            <td class="time-cell">{{ timeSlot }}</td>
                            <td *ngFor="let day of daysOfWeek" class="schedule-cell">
                                <div
                                    *ngFor="let schedule of getSchedulesStartingAtSlot(timeIndex, day)"
                                    [ngClass]="'schedule-block ' + getScheduleColor(schedule)"
                                    [style.grid-row]="'span ' + getRowSpan(schedule)"
                                    [style.min-height.px]="getRowSpan(schedule) * 60"
                                    class="p-3 rounded cursor-pointer hover:opacity-80 transition-opacity text-white flex flex-col items-center justify-center"
                                    (click)="viewSchedule(schedule)"
                                >
                                    <div class="text-sm font-bold">{{ schedule.subject?.subjectCode }}</div>
                                    <div class="text-xs mt-1">{{ schedule.faculty?.firstName }} {{ schedule.faculty?.lastName }}</div>
                                    <div class="text-xs mt-1 font-semibold">{{ schedule.startTime }} - {{ schedule.endTime }}</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- New Schedule Dialog -->
        <p-dialog [(visible)]="scheduleDialog" [style]="{ width: '500px' }" header="Add Lab Schedule" [modal]="true" [closable]="true" (onHide)="closeDialog()">
            <ng-template #content>
                <div class="grid grid-cols-12 gap-4 mt-2">
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Laboratory *</label>
                        <p-select [(ngModel)]="newSchedule.laboratory" [options]="laboratories" optionLabel="laboratoryName" optionValue="laboratoryId" placeholder="Select laboratory" class="w-full" appendTo="body" />
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Instructor</label>
                        <p-select [(ngModel)]="newSchedule.instructor" [options]="users" optionLabel="firstName" optionValue="userId" placeholder="Select instructor" [showClear]="true" class="w-full" appendTo="body" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Day *</label>
                        <p-select [(ngModel)]="newSchedule.day" [options]="daysOfWeek" placeholder="Select day" class="w-full" appendTo="body" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Subject *</label>
                        <div class="flex gap-2">
                            <p-select [(ngModel)]="newSchedule.activity" [options]="subjects" optionLabel="subjectName" optionValue="subjectId" placeholder="Select subject" class="flex-1" appendTo="body" />
                            <p-button icon="pi pi-plus" severity="secondary" (click)="openCreateSubjectDialog()" pTooltip="Create new subject" tooltipPosition="top" />
                        </div>
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">Time *</label>
                        <input pInputText [(ngModel)]="newSchedule.time" type="time" class="w-full" />
                    </div>
                    <div class="col-span-6">
                        <label class="block font-bold mb-2">End Time *</label>
                        <input pInputText [(ngModel)]="newSchedule.endTime" type="time" class="w-full" />
                    </div>
                </div>
            </ng-template>
            <ng-template #footer>
                <div class="flex justify-end gap-2 w-full">
                    <p-button label="Cancel" icon="pi pi-times" severity="secondary" text (click)="closeDialog()" />
                    <p-button label="Save" icon="pi pi-check" (click)="saveSchedule()" />
                </div>
            </ng-template>
        </p-dialog>

        <!-- Create Subject Dialog -->
        <p-dialog [(visible)]="subjectDialog" [header]="'Create New Subject'" [modal]="true" [style]="{ width: '50vw' }" [breakpoints]="{ '960px': '75vw', '640px': '90vw' }" [closable]="true">
            <div class="grid grid-cols-12 gap-4 mb-4">
                <div class="col-span-12">
                    <label class="block font-bold mb-2">Subject Name *</label>
                    <input pInputText [(ngModel)]="newSubject.subjectName" type="text" placeholder="Enter subject name" class="w-full" />
                </div>
                <div class="col-span-6">
                    <label class="block font-bold mb-2">Subject Code *</label>
                    <input pInputText [(ngModel)]="newSubject.subjectCode" type="text" placeholder="e.g., CS101" class="w-full" />
                </div>
                <div class="col-span-6">
                    <label class="block font-bold mb-2">Units *</label>
                    <input pInputText [(ngModel)]="newSubject.units" type="text" placeholder="e.g., 3" class="w-full" />
                </div>
                <div class="col-span-12">
                    <label class="block font-bold mb-2">Number of Students</label>
                    <p-inputNumber [(ngModel)]="newSubject.numberOfStudents" [min]="0" placeholder="Enter number of students" class="w-full" />
                </div>
            </div>
            <ng-template #footer>
                <div class="flex justify-end gap-2 w-full">
                    <p-button label="Cancel" icon="pi pi-times" severity="secondary" text (click)="closeSubjectDialog()" />
                    <p-button label="Create" icon="pi pi-check" (click)="saveSubject()" />
                </div>
            </ng-template>
        </p-dialog>
    `, styles: ['/* src/assets/layout/_labschedule-component.scss */\n.lab-schedule-container {\n  padding: 1.5rem;\n  background: #f3f4f6;\n  border-radius: 0.375rem;\n}\n.lab-schedule-container .schedule-title {\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 1.5rem;\n  color: #1f2937;\n}\n.lab-schedule-container .schedule-table-wrapper {\n  overflow-x: auto;\n  background: white;\n  border-radius: 0.375rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n}\n.lab-schedule-container .schedule-table {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 120px repeat(7, 1fr);\n  grid-auto-rows: 60px;\n  gap: 0;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.lab-schedule-container .schedule-table thead {\n  display: contents;\n}\n.lab-schedule-container .schedule-table thead tr {\n  display: contents;\n}\n.lab-schedule-container .schedule-table thead th {\n  background-color: var(--primary-color);\n  color: var(--primary-contrast-color);\n  padding: 1rem;\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.875rem;\n  border: 1px solid #e5e7eb;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n.lab-schedule-container .schedule-table thead th:first-child {\n  min-width: 120px;\n}\n.lab-schedule-container .schedule-table tbody {\n  display: contents;\n}\n.lab-schedule-container .schedule-table tbody tr {\n  display: contents;\n}\n.lab-schedule-container .schedule-table tbody td {\n  padding: 0;\n  border: 1px solid #e5e7eb;\n  position: relative;\n  vertical-align: top;\n}\n.lab-schedule-container .schedule-table tbody td.time-cell {\n  background-color: #f9fafb;\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: #374151;\n  border-right: 2px solid #d1d5db;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: sticky;\n  left: 0;\n  z-index: 5;\n}\n.lab-schedule-container .schedule-table tbody td.schedule-cell {\n  background-color: #fafafa;\n  overflow: visible;\n  position: relative;\n  padding: 2px;\n  display: grid;\n  grid-auto-rows: 60px;\n  grid-auto-flow: row;\n  align-content: start;\n}\n.lab-schedule-container .schedule-table tbody td.schedule-cell .schedule-block {\n  width: calc(100% - 4px);\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 0.375rem;\n  position: relative;\n  z-index: 20;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  box-sizing: border-box;\n  border-radius: 0.375rem;\n  position: relative;\n  z-index: 20;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.lab-schedule-container .schedule-table tbody td.schedule-cell .schedule-block:hover {\n  opacity: 0.9;\n  z-index: 25;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);\n}\n.lab-schedule-container .schedule-table tbody td.schedule-cell .schedule-block .block-title {\n  font-weight: 700;\n  margin-bottom: 0.125rem;\n}\n.lab-schedule-container .schedule-table tbody td.schedule-cell .schedule-block .block-info {\n  font-size: 0.65rem;\n  opacity: 0.95;\n}\n.lab-schedule-container .schedule-table tbody td.schedule-cell.bg-green-500 {\n  background-color: #10b981;\n}\n.lab-schedule-container .schedule-table tbody td.schedule-cell.bg-pink-500 {\n  background-color: #ec4899;\n}\n.lab-schedule-container .schedule-table tbody td.schedule-cell.bg-gray-700 {\n  background-color: #374151;\n}\n.lab-schedule-container .schedule-table tbody td.schedule-cell.bg-blue-600 {\n  background-color: #2563eb;\n}\n.lab-schedule-container .schedule-table tbody td.schedule-cell.bg-cyan-500 {\n  background-color: #06b6d4;\n}\n.lab-schedule-container .schedule-table tbody td.schedule-cell.bg-yellow-500 {\n  background-color: #eab308;\n  color: #1f2937;\n}\n.lab-schedule-container .schedule-table tbody td.schedule-cell.bg-yellow-500 .block-info {\n  color: #1f2937;\n}\n.lab-schedule-container .schedule-table tbody td.schedule-cell.bg-indigo-600 {\n  background-color: #4f46e5;\n}\n@media (max-width: 1024px) {\n  .lab-schedule-container {\n    padding: 1rem;\n  }\n  .lab-schedule-container .schedule-table {\n    font-size: 0.8125rem;\n  }\n  .lab-schedule-container .schedule-table thead th {\n    padding: 0.75rem 0.5rem;\n    font-size: 0.8125rem;\n  }\n  .lab-schedule-container .schedule-table tbody td {\n    padding: 0.375rem;\n    height: 50px;\n  }\n  .lab-schedule-container .schedule-table tbody td.time-cell {\n    min-width: 100px;\n    font-size: 0.75rem;\n  }\n  .lab-schedule-container .schedule-table tbody td.schedule-cell .schedule-block {\n    font-size: 0.65rem;\n  }\n  .lab-schedule-container .schedule-table tbody td.schedule-cell .schedule-block .block-info {\n    font-size: 0.6rem;\n  }\n}\n@media (max-width: 768px) {\n  .lab-schedule-container {\n    padding: 0.75rem;\n  }\n  .lab-schedule-container .schedule-title {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n  }\n  .lab-schedule-container .schedule-table thead th {\n    padding: 0.5rem 0.25rem;\n    font-size: 0.75rem;\n  }\n  .lab-schedule-container .schedule-table tbody td {\n    padding: 0.25rem;\n    height: 40px;\n  }\n  .lab-schedule-container .schedule-table tbody td.time-cell {\n    min-width: 80px;\n    font-size: 0.7rem;\n    padding: 0.25rem;\n  }\n  .lab-schedule-container .schedule-table tbody td.schedule-cell .schedule-block {\n    font-size: 0.6rem;\n    padding: 0.125rem 0.25rem;\n  }\n  .lab-schedule-container .schedule-table tbody td.schedule-cell .schedule-block .block-title {\n    margin-bottom: 0;\n  }\n  .lab-schedule-container .schedule-table tbody td.schedule-cell .schedule-block .block-info {\n    display: none;\n  }\n}\n/*# sourceMappingURL=_labschedule-component.css.map */\n'] }]
  }], () => [{ type: MessageService }, { type: HttpClient }, { type: AuthService }], { dt: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LabScheduleComponent, { className: "LabScheduleComponent", filePath: "src/app/pages/labschedule/labschedule.ts", lineNumber: 174 });
})();

// src/app/pages/laboratories/laboratories.ts
var _c014 = ["dt"];
var _c114 = () => ({ width: "500px" });
var _c26 = () => [];
var _c32 = () => [10, 20, 30];
var _c4 = () => ({ "min-width": "70rem" });
function LaboratoriesComponent_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Assets in ", ctx_r2.selectedLaboratoryData.laboratoryName, " (", (ctx_r2.selectedLaboratoryData.assets == null ? null : ctx_r2.selectedLaboratoryData.assets.length) || 0, ")");
  }
}
function LaboratoriesComponent_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "p-button", 17);
    \u0275\u0275listener("onClick", function LaboratoriesComponent_div_1_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteSelectedAssets());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 18);
    \u0275\u0275listener("onClick", function LaboratoriesComponent_div_1_ng_template_4_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.exportAssetsCSV());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.selectedAssets.length);
  }
}
function LaboratoriesComponent_div_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 19);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 20);
    \u0275\u0275text(4, "Asset ");
    \u0275\u0275element(5, "p-sortIcon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 22);
    \u0275\u0275text(7, "Property #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 23);
    \u0275\u0275text(9, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 24);
    \u0275\u0275text(11, "Issued To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 23);
    \u0275\u0275text(13, "QR Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 23);
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function LaboratoriesComponent_div_1_ng_template_9_div_12_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 35);
  }
  if (rf & 2) {
    const asset_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("src", asset_r5.qrCode, \u0275\u0275sanitizeUrl);
  }
}
function LaboratoriesComponent_div_1_ng_template_9_div_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", asset_r5.qrCode, " ");
  }
}
function LaboratoriesComponent_div_1_ng_template_9_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, LaboratoriesComponent_div_1_ng_template_9_div_12_img_1_Template, 1, 1, "img", 33)(2, LaboratoriesComponent_div_1_ng_template_9_div_12_span_2_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const asset_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isBase64Image(asset_r5.qrCode));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isBase64Image(asset_r5.qrCode));
  }
}
function LaboratoriesComponent_div_1_ng_template_9_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function LaboratoriesComponent_div_1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275element(2, "p-tableCheckbox", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "p-tag", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275template(12, LaboratoriesComponent_div_1_ng_template_9_div_12_Template, 3, 2, "div", 26)(13, LaboratoriesComponent_div_1_ng_template_9_span_13_Template, 2, 0, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "div", 28);
    \u0275\u0275element(16, "p-button", 29)(17, "p-button", 30)(18, "p-button", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const asset_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", asset_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r5.assetName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r5.propertyNumber);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", asset_r5.category || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r5.issuedTo);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", asset_r5.qrCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !asset_r5.qrCode);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function LaboratoriesComponent_div_1_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2, "No assets in this laboratory");
    \u0275\u0275elementEnd()();
  }
}
function LaboratoriesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "p-toolbar", 10);
    \u0275\u0275template(2, LaboratoriesComponent_div_1_ng_template_2_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(4, LaboratoriesComponent_div_1_ng_template_4_Template, 3, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-table", 11, 4);
    \u0275\u0275twoWayListener("selectionChange", function LaboratoriesComponent_div_1_Template_p_table_selectionChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedAssets, $event) || (ctx_r2.selectedAssets = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(8, LaboratoriesComponent_div_1_ng_template_8_Template, 16, 0, "ng-template", 12)(9, LaboratoriesComponent_div_1_ng_template_9_Template, 19, 13, "ng-template", 13)(10, LaboratoriesComponent_div_1_ng_template_10_Template, 3, 0, "ng-template", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r2.selectedLaboratoryData.assets || \u0275\u0275pureFunction0(9, _c26))("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(10, _c32))("loading", ctx_r2.loading)("rowHover", true);
    \u0275\u0275twoWayProperty("selection", ctx_r2.selectedAssets);
    \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(11, _c4));
  }
}
function LaboratoriesComponent_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "p-button", 41);
    \u0275\u0275listener("onClick", function LaboratoriesComponent_div_2_ng_template_2_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 17);
    \u0275\u0275listener("onClick", function LaboratoriesComponent_div_2_ng_template_2_Template_p_button_onClick_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteSelected());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedLabs.length);
  }
}
function LaboratoriesComponent_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "p-button", 18);
    \u0275\u0275listener("onClick", function LaboratoriesComponent_div_2_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.exportCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-iconfield");
    \u0275\u0275element(3, "p-inputicon", 42);
    \u0275\u0275elementStart(4, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function LaboratoriesComponent_div_2_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.searchValue, $event) || (ctx_r2.searchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function LaboratoriesComponent_div_2_ng_template_4_Template_input_input_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.filter());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchValue);
  }
}
function LaboratoriesComponent_div_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 19);
    \u0275\u0275element(2, "p-tableHeaderCheckbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 44);
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 45);
    \u0275\u0275text(6, "Laboratory Name ");
    \u0275\u0275element(7, "p-sortIcon", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 24);
    \u0275\u0275text(9, "Capacity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 24);
    \u0275\u0275text(11, "Campus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 23);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function LaboratoriesComponent_div_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275element(2, "p-tableCheckbox", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "div", 28)(13, "p-button", 47);
    \u0275\u0275listener("onClick", function LaboratoriesComponent_div_2_ng_template_9_Template_p_button_onClick_13_listener() {
      const lab_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.view(lab_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p-button", 48);
    \u0275\u0275listener("onClick", function LaboratoriesComponent_div_2_ng_template_9_Template_p_button_onClick_14_listener() {
      const lab_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.edit(lab_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p-button", 49);
    \u0275\u0275listener("onClick", function LaboratoriesComponent_div_2_ng_template_9_Template_p_button_onClick_15_listener() {
      const lab_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(lab_r10));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const lab_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", lab_r10);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lab_r10.laboratoryId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lab_r10.laboratoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lab_r10.capacity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lab_r10.campus == null ? null : lab_r10.campus.campusName);
    \u0275\u0275advance(3);
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
    \u0275\u0275advance();
    \u0275\u0275property("rounded", true)("text", true);
  }
}
function LaboratoriesComponent_div_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 50);
    \u0275\u0275text(2, "No laboratories found");
    \u0275\u0275elementEnd()();
  }
}
function LaboratoriesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p-toolbar", 39);
    \u0275\u0275template(2, LaboratoriesComponent_div_2_ng_template_2_Template, 3, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(4, LaboratoriesComponent_div_2_ng_template_4_Template, 5, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-table", 40, 5);
    \u0275\u0275twoWayListener("selectionChange", function LaboratoriesComponent_div_2_Template_p_table_selectionChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedLabs, $event) || (ctx_r2.selectedLabs = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function LaboratoriesComponent_div_2_Template_p_table_selectionChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSelectionChange($event));
    });
    \u0275\u0275template(8, LaboratoriesComponent_div_2_ng_template_8_Template, 14, 0, "ng-template", 12)(9, LaboratoriesComponent_div_2_ng_template_9_Template, 16, 11, "ng-template", 13)(10, LaboratoriesComponent_div_2_ng_template_10_Template, 3, 0, "ng-template", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r2.laboratories)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c32))("loading", ctx_r2.loading)("rowHover", true);
    \u0275\u0275twoWayProperty("selection", ctx_r2.selectedLabs);
    \u0275\u0275property("showCurrentPageReport", true)("tableStyle", \u0275\u0275pureFunction0(10, _c4));
  }
}
function LaboratoriesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "label", 53);
    \u0275\u0275text(3, "Laboratory Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function LaboratoriesComponent_ng_template_4_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newLab.laboratoryName, $event) || (ctx_r2.newLab.laboratoryName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 52)(6, "label", 53);
    \u0275\u0275text(7, "Capacity *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-inputNumber", 55);
    \u0275\u0275twoWayListener("ngModelChange", function LaboratoriesComponent_ng_template_4_Template_p_inputNumber_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newLab.capacity, $event) || (ctx_r2.newLab.capacity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 52)(10, "label", 53);
    \u0275\u0275text(11, "Laboratory Location *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function LaboratoriesComponent_ng_template_4_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newLab.laboratoryLocation, $event) || (ctx_r2.newLab.laboratoryLocation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newLab.laboratoryName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newLab.capacity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newLab.laboratoryLocation);
  }
}
function LaboratoriesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "p-button", 58);
    \u0275\u0275listener("click", function LaboratoriesComponent_ng_template_6_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-button", 59);
    \u0275\u0275listener("click", function LaboratoriesComponent_ng_template_6_Template_p_button_click_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveLab());
    });
    \u0275\u0275elementEnd()();
  }
}
var LaboratoriesComponent = class _LaboratoriesComponent {
  messageService;
  http;
  route;
  dt;
  laboratories = [];
  filteredLaboratories = [];
  selectedLabs = [];
  selectedAssets = [];
  searchValue = "";
  loading = true;
  selectedLaboratoryId = null;
  selectedLaboratoryData = null;
  // Dialog state
  labDialog = false;
  newLab = this.getEmptyLab();
  apiUrl = `${environment.apiUrl}/laboratories`;
  constructor(messageService, http, route) {
    this.messageService = messageService;
    this.http = http;
    this.route = route;
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const labId = params.get("id");
      if (labId) {
        console.log("\u{1F50D} Loading specific laboratory with ID:", labId);
        this.selectedLaboratoryId = labId;
        this.loadLaboratories(labId);
      } else {
        this.loadLaboratories();
      }
    });
  }
  getEmptyLab() {
    return {
      laboratoryId: "",
      laboratoryName: "",
      capacity: 0,
      laboratoryLocation: "",
      campus: null
    };
  }
  loadLaboratories(laboratoryId) {
    this.loading = true;
    console.log("\u{1F4E1} Fetching laboratories from:", this.apiUrl);
    this.http.get(this.apiUrl).subscribe({
      next: (data) => {
        console.log("\u2705 Laboratories API Response:", data);
        console.log("\u{1F4CA} Laboratories count:", data?.length || 0);
        if (data && data.length > 0) {
          console.log("\u{1F3F7}\uFE0F First laboratory:", data[0]);
          console.log("\u{1F3F7}\uFE0F Laboratory fields:", Object.keys(data[0]));
        }
        console.table(data);
        this.laboratories = data || [];
        if (laboratoryId) {
          const filtered = this.laboratories.filter((lab) => lab.laboratoryId === laboratoryId);
          if (filtered.length > 0) {
            console.log("\u{1F3AF} Found laboratory:", filtered[0]);
            this.selectedLaboratoryData = filtered[0];
            console.log("\u{1F4E6} Assets in laboratory:", this.selectedLaboratoryData.assets?.length || 0);
            this.filteredLaboratories = filtered;
          } else {
            console.warn("\u26A0\uFE0F Laboratory not found with ID:", laboratoryId);
            this.filteredLaboratories = [];
          }
        } else {
          this.filteredLaboratories = [...this.laboratories];
        }
        this.loading = false;
      },
      error: (error) => {
        console.error("\u274C Error loading laboratories:", error);
        console.error("Error status:", error?.status);
        console.error("Error message:", error?.message);
        console.error("Error details:", error?.error);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to load laboratories: " + error?.message
        });
        this.loading = false;
      }
    });
  }
  filter() {
    this.filteredLaboratories = this.laboratories.filter((lab) => {
      return lab.laboratoryName?.toLowerCase().includes(this.searchValue.toLowerCase()) || lab.laboratoryId?.toLowerCase().includes(this.searchValue.toLowerCase()) || lab.campus?.campusName?.toLowerCase().includes(this.searchValue.toLowerCase());
    });
  }
  onSelectionChange(event) {
    console.log("\u2705 Selection Changed");
    console.log("\u{1F4CA} Total Selected:", this.selectedLabs.length);
  }
  openNew() {
    this.newLab = this.getEmptyLab();
    this.labDialog = true;
  }
  closeDialog() {
    this.labDialog = false;
    this.newLab = this.getEmptyLab();
  }
  saveLab() {
    if (!this.newLab.laboratoryName || !this.newLab.capacity || !this.newLab.laboratoryLocation) {
      this.messageService.add({
        severity: "warn",
        summary: "Validation",
        detail: "Laboratory Name, Capacity, and Location are required"
      });
      return;
    }
    const payload = {
      laboratoryName: this.newLab.laboratoryName,
      capacity: this.newLab.capacity,
      laboratoryLocation: this.newLab.laboratoryLocation
    };
    console.log("\u{1F4E4} Creating laboratory with payload:", payload);
    this.http.post(this.apiUrl, payload).subscribe({
      next: (response) => {
        console.log("\u2705 Laboratory created:", response);
        this.messageService.add({
          severity: "success",
          summary: "Success",
          detail: "Laboratory created successfully"
        });
        this.closeDialog();
        this.loadLaboratories();
      },
      error: (error) => {
        console.error("\u274C Error creating laboratory:", error);
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to create laboratory: " + (error?.error?.message || error?.message)
        });
      }
    });
  }
  view(lab) {
    console.log("\u{1F441}\uFE0F Viewing laboratory:", lab);
    this.messageService.add({
      severity: "info",
      summary: "View Laboratory",
      detail: `Viewing: ${lab.laboratoryName}`
    });
  }
  edit(lab) {
    console.log("\u270F\uFE0F Editing laboratory:", lab);
    this.newLab = __spreadValues({}, lab);
    this.labDialog = true;
  }
  delete(lab) {
    console.log("\u{1F5D1}\uFE0F Deleting laboratory:", lab);
    this.messageService.add({
      severity: "warn",
      summary: "Delete Laboratory",
      detail: `Delete: ${lab.laboratoryName}?`
    });
  }
  deleteSelected() {
    if (!this.selectedLabs || this.selectedLabs.length === 0)
      return;
    console.log("\u{1F5D1}\uFE0F Deleting selected:", this.selectedLabs);
    this.messageService.add({
      severity: "warn",
      summary: "Delete",
      detail: `Delete ${this.selectedLabs.length} laboratory(ies)?`
    });
  }
  exportCSV() {
    let csv = "Laboratory ID,Laboratory Name,Capacity,Campus\n";
    this.laboratories.forEach((lab) => {
      csv += `${lab.laboratoryId},${lab.laboratoryName},${lab.capacity},${lab.campus?.campusName}
`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "laboratories.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  }
  isBase64Image(qrCode) {
    return qrCode?.startsWith("data:image") || qrCode?.startsWith("http");
  }
  deleteSelectedAssets() {
    if (!this.selectedAssets || this.selectedAssets.length === 0)
      return;
    console.log("\u{1F5D1}\uFE0F Deleting selected assets:", this.selectedAssets);
    this.messageService.add({
      severity: "warn",
      summary: "Delete",
      detail: `Delete ${this.selectedAssets.length} asset(s)?`
    });
  }
  exportAssetsCSV() {
    const assets = this.selectedLaboratoryData?.assets || [];
    let csv = "Asset Name,Property #,Category,Issued To\n";
    assets.forEach((asset) => {
      csv += `${asset.assetName},${asset.propertyNumber},${asset.category || "N/A"},${asset.issuedTo}
`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${this.selectedLaboratoryData?.laboratoryName || "laboratory"}_assets.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }
  static \u0275fac = function LaboratoriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LaboratoriesComponent)(\u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LaboratoriesComponent, selectors: [["app-laboratories"]], viewQuery: function LaboratoriesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c014, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dt = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 8, vars: 8, consts: [["content", ""], ["footer", ""], ["start", ""], ["end", ""], ["dtAssets", ""], ["dt", ""], ["class", "mb-4", 4, "ngIf"], [4, "ngIf"], ["header", "Laboratory", 3, "visibleChange", "onHide", "visible", "modal", "closable"], [1, "mb-4"], ["styleClass", "mb-4 mt-4"], ["dataKey", "assetId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} assets", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "flex", "items-center", "gap-2"], [1, "text-lg", "font-semibold"], ["label", "Delete Selected", "icon", "pi pi-trash", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Export", "icon", "pi pi-upload", "severity", "secondary", 3, "onClick"], [2, "width", "3rem"], ["pSortableColumn", "assetName", 2, "min-width", "18rem"], ["field", "assetName"], [2, "min-width", "14rem"], [2, "min-width", "12rem"], [2, "min-width", "15rem"], [3, "value"], ["class", "inline-block", 4, "ngIf"], ["class", "text-gray-400", 4, "ngIf"], [1, "flex", "gap-2"], ["icon", "pi pi-eye", "severity", "info", "pTooltip", "View", 3, "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", "pTooltip", "Edit", 3, "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", "pTooltip", "Delete", 3, "rounded", "text"], [1, "inline-block"], ["alt", "QR Code", "class", "w-14 h-14 rounded-lg border-2 border-gray-300 cursor-pointer hover:shadow-lg hover:scale-110 transition-all", "pTooltip", "Click to view QR Code", 3, "src", 4, "ngIf"], ["class", "text-sm bg-blue-100 px-2 py-1 rounded cursor-pointer hover:bg-blue-200 transition-colors", "pTooltip", "Click to copy QR Code", 4, "ngIf"], ["alt", "QR Code", "pTooltip", "Click to view QR Code", 1, "w-14", "h-14", "rounded-lg", "border-2", "border-gray-300", "cursor-pointer", "hover:shadow-lg", "hover:scale-110", "transition-all", 3, "src"], ["pTooltip", "Click to copy QR Code", 1, "text-sm", "bg-blue-100", "px-2", "py-1", "rounded", "cursor-pointer", "hover:bg-blue-200", "transition-colors"], [1, "text-gray-400"], ["colspan", "7", 1, "text-center", "py-5"], ["styleClass", "mb-4"], ["dataKey", "laboratoryId", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} laboratories", 3, "selectionChange", "value", "rows", "paginator", "rowsPerPageOptions", "loading", "rowHover", "selection", "showCurrentPageReport", "tableStyle"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 3, "onClick"], ["styleClass", "pi pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search laboratories...", 3, "ngModelChange", "input", "ngModel"], [2, "min-width", "25rem"], ["pSortableColumn", "laboratoryName", 2, "min-width", "20rem"], ["field", "laboratoryName"], ["icon", "pi pi-eye", "severity", "info", 3, "onClick", "rounded", "text"], ["icon", "pi pi-pencil", "severity", "secondary", 3, "onClick", "rounded", "text"], ["icon", "pi pi-trash", "severity", "danger", 3, "onClick", "rounded", "text"], ["colspan", "6", 1, "text-center", "py-5"], [1, "grid", "grid-cols-12", "gap-4", "mt-2"], [1, "col-span-12"], [1, "block", "font-bold", "mb-2"], ["pInputText", "", "placeholder", "Enter laboratory name", 1, "w-full", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter capacity", 1, "w-full", 3, "ngModelChange", "ngModel"], ["pInputText", "", "placeholder", "Enter laboratory location", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-2", "w-full"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", "text", "", 3, "click"], ["label", "Save", "icon", "pi pi-check", 3, "click"]], template: function LaboratoriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275template(1, LaboratoriesComponent_div_1_Template, 11, 12, "div", 6)(2, LaboratoriesComponent_div_2_Template, 11, 11, "div", 7);
      \u0275\u0275elementStart(3, "p-dialog", 8);
      \u0275\u0275twoWayListener("visibleChange", function LaboratoriesComponent_Template_p_dialog_visibleChange_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.labDialog, $event) || (ctx.labDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onHide", function LaboratoriesComponent_Template_p_dialog_onHide_3_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeDialog());
      });
      \u0275\u0275template(4, LaboratoriesComponent_ng_template_4_Template, 13, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, LaboratoriesComponent_ng_template_6_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedLaboratoryId && ctx.selectedLaboratoryData);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedLaboratoryId);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(7, _c114));
      \u0275\u0275twoWayProperty("visible", ctx.labDialog);
      \u0275\u0275property("modal", true)("closable", true);
    }
  }, dependencies: [CommonModule, NgIf, TableModule, Table, PrimeTemplate, SortableColumn, SortIcon, TableCheckbox, TableHeaderCheckbox, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, RippleModule, ToastModule, Toast, ToolbarModule, Toolbar, InputTextModule, InputText, TagModule, Tag, InputIconModule, InputIcon, IconFieldModule, IconField, TooltipModule, Tooltip, DialogModule, Dialog, SelectModule, InputNumberModule, InputNumber, TextareaModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LaboratoriesComponent, [{
    type: Component,
    args: [{
      selector: "app-laboratories",
      standalone: true,
      imports: [CommonModule, TableModule, FormsModule, ButtonModule, RippleModule, ToastModule, ToolbarModule, InputTextModule, TagModule, InputIconModule, IconFieldModule, TooltipModule, DialogModule, SelectModule, InputNumberModule, TextareaModule],
      providers: [MessageService],
      template: `
        <p-toast />

        <!-- Laboratory Details View (when viewing specific lab via route param) -->
        <div *ngIf="selectedLaboratoryId && selectedLaboratoryData" class="mb-4">
            <p-toolbar styleClass="mb-4 mt-4">
                <ng-template #start>
                    <div class="flex items-center gap-2">
                        <span class="text-lg font-semibold">Assets in {{ selectedLaboratoryData.laboratoryName }} ({{ selectedLaboratoryData.assets?.length || 0 }})</span>
                    </div>
                </ng-template>
                <ng-template #end>
                    <div class="flex items-center gap-2">
                        <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelectedAssets()" [disabled]="!selectedAssets.length" />
                        <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportAssetsCSV()" />
                    </div>
                </ng-template>
            </p-toolbar>

            <p-table
                #dtAssets
                [value]="selectedLaboratoryData.assets || []"
                [rows]="10"
                [paginator]="true"
                [rowsPerPageOptions]="[10, 20, 30]"
                [loading]="loading"
                [rowHover]="true"
                dataKey="assetId"
                [(selection)]="selectedAssets"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} assets"
                [showCurrentPageReport]="true"
                [tableStyle]="{ 'min-width': '70rem' }"
            >
                <ng-template pTemplate="header">
                    <tr>
                        <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                        <th pSortableColumn="assetName" style="min-width:18rem">Asset <p-sortIcon field="assetName" /></th>
                        <th style="min-width:14rem">Property #</th>
                        <th style="min-width:12rem">Category</th>
                        <th style="min-width:15rem">Issued To</th>
                        <th style="min-width:12rem">QR Code</th>
                        <th style="min-width:12rem">Actions</th>
                    </tr>
                </ng-template>

                <ng-template pTemplate="body" let-asset>
                    <tr>
                        <td style="width: 3rem"><p-tableCheckbox [value]="asset" /></td>
                        <td>{{ asset.assetName }}</td>
                        <td>{{ asset.propertyNumber }}</td>
                        <td><p-tag [value]="asset.category || 'N/A'" /></td>
                        <td>{{ asset.issuedTo }}</td>
                        <td>
                            <div *ngIf="asset.qrCode" class="inline-block">
                                <img
                                    *ngIf="isBase64Image(asset.qrCode)"
                                    [src]="asset.qrCode"
                                    alt="QR Code"
                                    class="w-14 h-14 rounded-lg border-2 border-gray-300 cursor-pointer hover:shadow-lg hover:scale-110 transition-all"
                                    pTooltip="Click to view QR Code"
                                />
                                <span *ngIf="!isBase64Image(asset.qrCode)" class="text-sm bg-blue-100 px-2 py-1 rounded cursor-pointer hover:bg-blue-200 transition-colors" pTooltip="Click to copy QR Code">
                                    {{ asset.qrCode }}
                                </span>
                            </div>
                            <span *ngIf="!asset.qrCode" class="text-gray-400">N/A</span>
                        </td>
                        <td>
                            <div class="flex gap-2">
                                <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" pTooltip="View" />
                                <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" pTooltip="Edit" />
                                <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" pTooltip="Delete" />
                            </div>
                        </td>
                    </tr>
                </ng-template>

                <ng-template pTemplate="emptymessage">
                    <tr>
                        <td colspan="7" class="text-center py-5">No assets in this laboratory</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>

        <!-- Laboratories List View (when not viewing specific lab) -->
        <div *ngIf="!selectedLaboratoryId">
            <p-toolbar styleClass="mb-4">
                <ng-template #start>
                    <div class="flex items-center gap-2">
                        <p-button label="New" icon="pi pi-plus" severity="secondary" (onClick)="openNew()" />
                        <p-button label="Delete Selected" icon="pi pi-trash" severity="secondary" outlined (onClick)="deleteSelected()" [disabled]="!selectedLabs.length" />
                    </div>
                </ng-template>
                <ng-template #end>
                    <div class="flex items-center gap-2">
                        <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV()" />
                        <p-iconfield>
                            <p-inputicon styleClass="pi pi-search" />
                            <input pInputText type="text" [(ngModel)]="searchValue" (input)="filter()" placeholder="Search laboratories..." />
                        </p-iconfield>
                    </div>
                </ng-template>
            </p-toolbar>

            <p-table
                #dt
                [value]="laboratories"
                [rows]="10"
                [paginator]="true"
                [rowsPerPageOptions]="[10, 20, 30]"
                [loading]="loading"
                [rowHover]="true"
                dataKey="laboratoryId"
                [(selection)]="selectedLabs"
                (selectionChange)="onSelectionChange($event)"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} laboratories"
                [showCurrentPageReport]="true"
                [tableStyle]="{ 'min-width': '70rem' }"
            >
                <ng-template pTemplate="header">
                    <tr>
                        <th style="width:3rem"><p-tableHeaderCheckbox /></th>
                        <th style="min-width:25rem">ID</th>
                        <th pSortableColumn="laboratoryName" style="min-width:20rem">Laboratory Name <p-sortIcon field="laboratoryName" /></th>
                        <th style="min-width:15rem">Capacity</th>
                        <th style="min-width:15rem">Campus</th>
                        <th style="min-width:12rem">Actions</th>
                    </tr>
                </ng-template>

                <ng-template pTemplate="body" let-lab>
                    <tr>
                        <td style="width: 3rem"><p-tableCheckbox [value]="lab" /></td>
                        <td>{{ lab.laboratoryId }}</td>
                        <td>{{ lab.laboratoryName }}</td>
                        <td>{{ lab.capacity }}</td>
                        <td>{{ lab.campus?.campusName }}</td>
                        <td>
                            <div class="flex gap-2">
                                <p-button icon="pi pi-eye" severity="info" [rounded]="true" [text]="true" (onClick)="view(lab)" />
                                <p-button icon="pi pi-pencil" severity="secondary" [rounded]="true" [text]="true" (onClick)="edit(lab)" />
                                <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [text]="true" (onClick)="delete(lab)" />
                            </div>
                        </td>
                    </tr>
                </ng-template>

                <ng-template pTemplate="emptymessage">
                    <tr>
                        <td colspan="6" class="text-center py-5">No laboratories found</td>
                    </tr>
                </ng-template>
            </p-table>
        </div>

        <!-- New Laboratory Dialog -->
        <p-dialog [(visible)]="labDialog" [style]="{ width: '500px' }" header="Laboratory" [modal]="true" [closable]="true" (onHide)="closeDialog()">
            <ng-template #content>
                <div class="grid grid-cols-12 gap-4 mt-2">
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Laboratory Name *</label>
                        <input pInputText [(ngModel)]="newLab.laboratoryName" placeholder="Enter laboratory name" class="w-full" />
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Capacity *</label>
                        <p-inputNumber [(ngModel)]="newLab.capacity" placeholder="Enter capacity" class="w-full" />
                    </div>
                    <div class="col-span-12">
                        <label class="block font-bold mb-2">Laboratory Location *</label>
                        <input pInputText [(ngModel)]="newLab.laboratoryLocation" placeholder="Enter laboratory location" class="w-full" />
                    </div>
                </div>
            </ng-template>
            <ng-template #footer>
                <div class="flex justify-end gap-2 w-full">
                    <p-button label="Cancel" icon="pi pi-times" severity="secondary" text (click)="closeDialog()" />
                    <p-button label="Save" icon="pi pi-check" (click)="saveLab()" />
                </div>
            </ng-template>
        </p-dialog>
    `
    }]
  }], () => [{ type: MessageService }, { type: HttpClient }, { type: ActivatedRoute }], { dt: [{
    type: ViewChild,
    args: ["dt"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LaboratoriesComponent, { className: "LaboratoriesComponent", filePath: "src/app/pages/laboratories/laboratories.ts", lineNumber: 211 });
})();

// src/app/pages/reports/asset-report/asset-report.ts
var _c015 = () => ["Active", "Inactive", "All"];
function AssetReportComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 17);
    \u0275\u0275text(1, "Asset Report");
    \u0275\u0275elementEnd();
  }
}
function AssetReportComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 18);
    \u0275\u0275listener("onClick", function AssetReportComponent_ng_template_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportToCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 19);
    \u0275\u0275listener("onClick", function AssetReportComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printReport());
    });
    \u0275\u0275elementEnd();
  }
}
function AssetReportComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "label", 22);
    \u0275\u0275text(3, "Category Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function AssetReportComponent_ng_template_23_Template_p_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedCategory, $event) || (ctx_r1.selectedCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function AssetReportComponent_ng_template_23_Template_p_select_onChange_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterAssets());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 21)(6, "label", 22);
    \u0275\u0275text(7, "Status Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function AssetReportComponent_ng_template_23_Template_p_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedStatus, $event) || (ctx_r1.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function AssetReportComponent_ng_template_23_Template_p_select_onChange_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterAssets());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 25)(10, "p-button", 26);
    \u0275\u0275listener("onClick", function AssetReportComponent_ng_template_23_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedCategory);
    \u0275\u0275property("options", ctx_r1.categories)("showClear", true);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedStatus);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(6, _c015))("showClear", true);
  }
}
function AssetReportComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 27);
    \u0275\u0275text(2, "Asset Name ");
    \u0275\u0275element(3, "p-sortIcon", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 27);
    \u0275\u0275text(5, "Category ");
    \u0275\u0275element(6, "p-sortIcon", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 27);
    \u0275\u0275text(8, "Property No. ");
    \u0275\u0275element(9, "p-sortIcon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Issued To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Location");
    \u0275\u0275elementEnd()();
  }
}
function AssetReportComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275element(10, "p-tag", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asset_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r4.assetName || asset_r4.AssetName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r4.category || asset_r4.Category || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r4.propertyNumber || asset_r4.PropertyNo || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r4.issuedTo || asset_r4.IssuedTo || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", asset_r4.Status_id === "1" ? "Active" : "Inactive")("severity", asset_r4.Status_id === "1" ? "success" : "secondary");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r4.foundCluster || asset_r4.FoundCluster || "N/A");
  }
}
function AssetReportComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2, "No assets found matching the selected filters.");
    \u0275\u0275elementEnd()();
  }
}
function AssetReportComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 33);
    \u0275\u0275text(1, "Assets by Category");
    \u0275\u0275elementEnd();
  }
}
function AssetReportComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Percentage");
    \u0275\u0275elementEnd()();
  }
}
function AssetReportComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.category || "Uncategorized");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (row_r5.count / ctx_r1.assets.length * 100).toFixed(2), "%");
  }
}
var AssetReportComponent = class _AssetReportComponent {
  assetService;
  messageService;
  assets = [];
  filteredAssets = [];
  categories = [];
  selectedCategory = "";
  selectedStatus = "";
  constructor(assetService, messageService) {
    this.assetService = assetService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadAssets();
  }
  loadAssets() {
    this.assetService.getAssets().subscribe({
      next: (data) => {
        this.assets = data;
        this.filteredAssets = data;
        this.extractCategories();
        console.log("\u2705 Assets loaded:", this.assets.length);
      },
      error: (err) => {
        console.error("\u274C Error loading assets:", err);
        this.messageService.add({ severity: "error", summary: "Error", detail: "Failed to load assets" });
      }
    });
  }
  extractCategories() {
    const uniqueCategories = new Set(this.assets.map((a) => a.category || a.Category).filter((c) => c));
    this.categories = Array.from(uniqueCategories).map((cat) => ({ category: cat }));
  }
  filterAssets() {
    this.filteredAssets = this.assets.filter((asset) => {
      const matchCategory = !this.selectedCategory || (asset.category || asset.Category) === this.selectedCategory;
      const matchStatus = !this.selectedStatus || (this.selectedStatus === "Active" ? asset.Status_id === "1" : asset.Status_id !== "1");
      return matchCategory && matchStatus;
    });
  }
  clearFilters() {
    this.selectedCategory = "";
    this.selectedStatus = "";
    this.filteredAssets = this.assets;
  }
  getActiveAssetsCount() {
    return this.assets.filter((a) => a.Status_id === "1").length;
  }
  getCategoriesCount() {
    return new Set(this.assets.map((a) => a.category || a.Category)).size;
  }
  getCategoryBreakdown() {
    const breakdown = {};
    this.assets.forEach((asset) => {
      const cat = asset.category || asset.Category || "Uncategorized";
      breakdown[cat] = (breakdown[cat] || 0) + 1;
    });
    return Object.entries(breakdown).map(([category, count]) => ({ category, count }));
  }
  exportToCSV() {
    const headers = ["Asset Name", "Category", "Property Number", "Issued To", "Status", "Location"];
    const rows = this.filteredAssets.map((a) => [a.assetName || a.AssetName, a.category || a.Category, a.propertyNumber || a.PropertyNo, a.issuedTo || a.IssuedTo, a.Status_id === "1" ? "Active" : "Inactive", a.foundCluster || a.FoundCluster]);
    let csv = headers.join(",") + "\n";
    rows.forEach((row) => {
      csv += row.map((cell) => `"${cell || ""}"`).join(",") + "\n";
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `asset-report-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
    this.messageService.add({ severity: "success", summary: "Exported", detail: "Asset report exported to CSV" });
  }
  printReport() {
    window.print();
  }
  static \u0275fac = function AssetReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssetReportComponent)(\u0275\u0275directiveInject(AssetService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportComponent, selectors: [["app-asset-report"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 40, vars: 7, consts: [["start", ""], ["end", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["styleClass", "mb-4"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "mb-6"], [1, "p-4", "bg-blue-50", "rounded-lg"], [1, "text-gray-600", "text-sm"], [1, "text-3xl", "font-bold", "text-blue-600"], [1, "p-4", "bg-green-50", "rounded-lg"], [1, "text-3xl", "font-bold", "text-green-600"], [1, "p-4", "bg-orange-50", "rounded-lg"], [1, "text-3xl", "font-bold", "text-orange-600"], [1, "mb-4"], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows"], [3, "value"], [1, "text-2xl", "font-bold"], ["label", "Export to CSV", "icon", "pi pi-download", "severity", "success", 3, "onClick"], ["label", "Print", "icon", "pi pi-print", "severity", "info", 1, "ml-2", 3, "onClick"], [1, "flex", "gap-4", "p-4"], [1, "flex-1"], [1, "block", "text-sm", "font-medium", "mb-2"], ["optionLabel", "category", "optionValue", "category", "placeholder", "All Categories", 3, "ngModelChange", "onChange", "ngModel", "options", "showClear"], ["placeholder", "All Status", 3, "ngModelChange", "onChange", "ngModel", "options", "showClear"], [1, "flex", "items-end"], ["label", "Clear Filters", "icon", "pi pi-times", "severity", "secondary", 3, "onClick"], ["pSortableColumn", ""], ["field", "assetName"], ["field", "category"], ["field", "propertyNumber"], [3, "value", "severity"], ["colspan", "6", 1, "text-center", "p-4"], [1, "text-lg", "font-bold", "p-4"]], template: function AssetReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 5);
      \u0275\u0275template(2, AssetReportComponent_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, AssetReportComponent_ng_template_4_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "p", 8);
      \u0275\u0275text(9, "Total Assets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 9);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10)(13, "p", 8);
      \u0275\u0275text(14, "Active Assets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 11);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "p", 8);
      \u0275\u0275text(19, "By Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 13);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "p-card", 14);
      \u0275\u0275template(23, AssetReportComponent_ng_template_23_Template, 11, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(25, "p-table", 15);
      \u0275\u0275template(26, AssetReportComponent_ng_template_26_Template, 16, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(28, AssetReportComponent_ng_template_28_Template, 13, 7, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(30, AssetReportComponent_ng_template_30_Template, 3, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "p-card");
      \u0275\u0275template(33, AssetReportComponent_ng_template_33_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(35, "p-table", 16);
      \u0275\u0275template(36, AssetReportComponent_ng_template_36_Template, 7, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(38, AssetReportComponent_ng_template_38_Template, 7, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.assets.length);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getActiveAssetsCount());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getCategoriesCount());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.filteredAssets)("paginator", true)("rows", 10);
      \u0275\u0275advance(10);
      \u0275\u0275property("value", ctx.getCategoryBreakdown());
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, ButtonModule, Button, TableModule, Table, SortableColumn, SortIcon, SelectModule, Select, InputTextModule, CardModule, Card, ToastModule, Toast, ToolbarModule, Toolbar, TagModule, Tag, DatePickerModule], styles: ["\n\n[_nghost-%COMP%]     .p-card {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=asset-report.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetReportComponent, [{
    type: Component,
    args: [{ selector: "app-asset-report", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, TableModule, SelectModule, InputTextModule, CardModule, ToastModule, ToolbarModule, TagModule, DatePickerModule], providers: [MessageService], template: `
        <p-toast />

        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <h2 class="text-2xl font-bold">Asset Report</h2>
            </ng-template>
            <ng-template #end>
                <p-button label="Export to CSV" icon="pi pi-download" severity="success" (onClick)="exportToCSV()" />
                <p-button label="Print" icon="pi pi-print" severity="info" (onClick)="printReport()" class="ml-2" />
            </ng-template>
        </p-toolbar>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div class="p-4 bg-blue-50 rounded-lg">
                <p class="text-gray-600 text-sm">Total Assets</p>
                <p class="text-3xl font-bold text-blue-600">{{ assets.length }}</p>
            </div>
            <div class="p-4 bg-green-50 rounded-lg">
                <p class="text-gray-600 text-sm">Active Assets</p>
                <p class="text-3xl font-bold text-green-600">{{ getActiveAssetsCount() }}</p>
            </div>
            <div class="p-4 bg-orange-50 rounded-lg">
                <p class="text-gray-600 text-sm">By Category</p>
                <p class="text-3xl font-bold text-orange-600">{{ getCategoriesCount() }}</p>
            </div>
        </div>

        <p-card class="mb-4">
            <ng-template #header>
                <div class="flex gap-4 p-4">
                    <div class="flex-1">
                        <label class="block text-sm font-medium mb-2">Category Filter</label>
                        <p-select [(ngModel)]="selectedCategory" [options]="categories" optionLabel="category" optionValue="category" placeholder="All Categories" [showClear]="true" (onChange)="filterAssets()" />
                    </div>
                    <div class="flex-1">
                        <label class="block text-sm font-medium mb-2">Status Filter</label>
                        <p-select [(ngModel)]="selectedStatus" [options]="['Active', 'Inactive', 'All']" placeholder="All Status" [showClear]="true" (onChange)="filterAssets()" />
                    </div>
                    <div class="flex items-end">
                        <p-button label="Clear Filters" icon="pi pi-times" severity="secondary" (onClick)="clearFilters()" />
                    </div>
                </div>
            </ng-template>

            <p-table [value]="filteredAssets" responsiveLayout="scroll" [paginator]="true" [rows]="10">
                <ng-template #header>
                    <tr>
                        <th pSortableColumn>Asset Name <p-sortIcon field="assetName" /></th>
                        <th pSortableColumn>Category <p-sortIcon field="category" /></th>
                        <th pSortableColumn>Property No. <p-sortIcon field="propertyNumber" /></th>
                        <th>Issued To</th>
                        <th>Status</th>
                        <th>Location</th>
                    </tr>
                </ng-template>
                <ng-template #body let-asset>
                    <tr>
                        <td>{{ asset.assetName || asset.AssetName || 'N/A' }}</td>
                        <td>{{ asset.category || asset.Category || 'N/A' }}</td>
                        <td>{{ asset.propertyNumber || asset.PropertyNo || 'N/A' }}</td>
                        <td>{{ asset.issuedTo || asset.IssuedTo || 'N/A' }}</td>
                        <td>
                            <p-tag [value]="asset.Status_id === '1' ? 'Active' : 'Inactive'" [severity]="asset.Status_id === '1' ? 'success' : 'secondary'" />
                        </td>
                        <td>{{ asset.foundCluster || asset.FoundCluster || 'N/A' }}</td>
                    </tr>
                </ng-template>
                <ng-template #emptymessage>
                    <tr>
                        <td colspan="6" class="text-center p-4">No assets found matching the selected filters.</td>
                    </tr>
                </ng-template>
            </p-table>
        </p-card>

        <p-card>
            <ng-template #header>
                <h3 class="text-lg font-bold p-4">Assets by Category</h3>
            </ng-template>
            <p-table [value]="getCategoryBreakdown()">
                <ng-template #header>
                    <tr>
                        <th>Category</th>
                        <th>Count</th>
                        <th>Percentage</th>
                    </tr>
                </ng-template>
                <ng-template #body let-row>
                    <tr>
                        <td>{{ row.category || 'Uncategorized' }}</td>
                        <td>{{ row.count }}</td>
                        <td>{{ ((row.count / assets.length) * 100).toFixed(2) }}%</td>
                    </tr>
                </ng-template>
            </p-table>
        </p-card>
    `, styles: ["/* angular:styles/component:scss;04dfea9770f394ef530fb5d3ebede3b62d2c700c87360ee8901fa307b2d73844;C:/Users/jeric/Documents/2026 files/LAMS-COPY/LAMS-COPY/src/app/pages/reports/asset-report/asset-report.ts */\n:host ::ng-deep .p-card {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=asset-report.css.map */\n"] }]
  }], () => [{ type: AssetService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportComponent, { className: "AssetReportComponent", filePath: "src/app/pages/reports/asset-report/asset-report.ts", lineNumber: 129 });
})();

// src/app/pages/reports/maintenance-report/maintenance-report.ts
var _c016 = () => ["Pending", "Approved", "Completed", "All"];
var _c115 = () => ["Urgent", "High", "Normal", "Low", "All"];
function MaintenanceReportComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 20);
    \u0275\u0275text(1, "Maintenance Report");
    \u0275\u0275elementEnd();
  }
}
function MaintenanceReportComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 21);
    \u0275\u0275listener("onClick", function MaintenanceReportComponent_ng_template_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportToCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 22);
    \u0275\u0275listener("onClick", function MaintenanceReportComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printReport());
    });
    \u0275\u0275elementEnd();
  }
}
function MaintenanceReportComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "label", 25);
    \u0275\u0275text(3, "Status Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function MaintenanceReportComponent_ng_template_28_Template_p_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedStatus, $event) || (ctx_r1.selectedStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function MaintenanceReportComponent_ng_template_28_Template_p_select_onChange_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterRequests());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 24)(6, "label", 25);
    \u0275\u0275text(7, "Priority Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function MaintenanceReportComponent_ng_template_28_Template_p_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedPriority, $event) || (ctx_r1.selectedPriority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function MaintenanceReportComponent_ng_template_28_Template_p_select_onChange_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterRequests());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 28)(10, "p-button", 29);
    \u0275\u0275listener("onClick", function MaintenanceReportComponent_ng_template_28_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedStatus);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(4, _c016));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedPriority);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(5, _c115));
  }
}
function MaintenanceReportComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 30);
    \u0275\u0275text(2, "Request Name ");
    \u0275\u0275element(3, "p-sortIcon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 30);
    \u0275\u0275text(5, "Type ");
    \u0275\u0275element(6, "p-sortIcon", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 30);
    \u0275\u0275text(14, "Date ");
    \u0275\u0275element(15, "p-sortIcon", 33);
    \u0275\u0275elementEnd()();
  }
}
function MaintenanceReportComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "p-tag", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "p-tag", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const req_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r4.maintenanceName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r4.maintenanceTypeName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.getPriorityLabel(req_r4.priorityLevelName))("severity", ctx_r1.getPrioritySeverity(req_r4.priorityLevelName));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", req_r4.requestStatusName || "Pending")("severity", ctx_r1.getStatusSeverity(req_r4.requestStatusName));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(req_r4.serviceMaintenanceName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(req_r4.createdDate));
  }
}
function MaintenanceReportComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2, "No maintenance requests found.");
    \u0275\u0275elementEnd()();
  }
}
function MaintenanceReportComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 36);
    \u0275\u0275text(1, "Requests by Status");
    \u0275\u0275elementEnd();
  }
}
function MaintenanceReportComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Percentage");
    \u0275\u0275elementEnd()();
  }
}
function MaintenanceReportComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (row_r5.count / ctx_r1.maintenanceRequests.length * 100).toFixed(2), "%");
  }
}
function MaintenanceReportComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 36);
    \u0275\u0275text(1, "Requests by Priority");
    \u0275\u0275elementEnd();
  }
}
function MaintenanceReportComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Percentage");
    \u0275\u0275elementEnd()();
  }
}
function MaintenanceReportComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.priority);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (row_r6.count / ctx_r1.maintenanceRequests.length * 100).toFixed(2), "%");
  }
}
var MaintenanceReportComponent = class _MaintenanceReportComponent {
  maintenanceService;
  messageService;
  maintenanceRequests = [];
  filteredRequests = [];
  selectedStatus = "All";
  selectedPriority = "All";
  constructor(maintenanceService, messageService) {
    this.maintenanceService = maintenanceService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadMaintenanceRequests();
  }
  loadMaintenanceRequests() {
    this.maintenanceService.getMaintenanceRequests().subscribe({
      next: (data) => {
        this.maintenanceRequests = data;
        this.filteredRequests = data;
        console.log("\u2705 Maintenance requests loaded:", this.maintenanceRequests.length);
      },
      error: (err) => {
        console.error("\u274C Error loading maintenance requests:", err);
        this.messageService.add({ severity: "error", summary: "Error", detail: "Failed to load maintenance requests" });
      }
    });
  }
  filterRequests() {
    this.filteredRequests = this.maintenanceRequests.filter((req) => {
      const matchStatus = this.selectedStatus === "All" || (req.requestStatusName || "Pending") === this.selectedStatus;
      const matchPriority = this.selectedPriority === "All" || (req.priorityLevelName || "Normal") === this.selectedPriority;
      return matchStatus && matchPriority;
    });
  }
  clearFilters() {
    this.selectedStatus = "All";
    this.selectedPriority = "All";
    this.filteredRequests = this.maintenanceRequests;
  }
  getPendingCount() {
    return this.maintenanceRequests.filter((r) => (r.requestStatusName || "Pending") === "Pending").length;
  }
  getApprovedCount() {
    return this.maintenanceRequests.filter((r) => r.requestStatusName === "Approved").length;
  }
  getCompletedCount() {
    return this.maintenanceRequests.filter((r) => r.requestStatusName === "Completed").length;
  }
  getStatusSeverity(status) {
    const statusMap = {
      Pending: "warn",
      Approved: "info",
      Completed: "success"
    };
    return statusMap[status] || "secondary";
  }
  getPrioritySeverity(priority) {
    const priorityMap = {
      Urgent: "danger",
      High: "warn",
      Normal: "info",
      Low: "success"
    };
    return priorityMap[priority] || "secondary";
  }
  getPriorityLabel(priority) {
    return priority || "Normal";
  }
  getStatusBreakdown() {
    const breakdown = {};
    this.maintenanceRequests.forEach((req) => {
      const status = req.requestStatusName || "Pending";
      breakdown[status] = (breakdown[status] || 0) + 1;
    });
    return Object.entries(breakdown).map(([status, count]) => ({ status, count }));
  }
  getPriorityBreakdown() {
    const breakdown = {};
    this.maintenanceRequests.forEach((req) => {
      const priority = req.priorityLevelName || "Normal";
      breakdown[priority] = (breakdown[priority] || 0) + 1;
    });
    return Object.entries(breakdown).map(([priority, count]) => ({ priority, count }));
  }
  formatDate(date) {
    if (!date)
      return "N/A";
    return new Date(date).toLocaleDateString();
  }
  exportToCSV() {
    const headers = ["Request Name", "Type", "Priority", "Status", "Service", "Date"];
    const rows = this.filteredRequests.map((r) => [r.maintenanceName || "N/A", r.maintenanceTypeName || "N/A", r.priorityLevelName || "Normal", r.requestStatusName || "Pending", r.serviceMaintenanceName || "N/A", this.formatDate(r.createdDate)]);
    let csv = headers.join(",") + "\n";
    rows.forEach((row) => {
      csv += row.map((cell) => `"${cell}"`).join(",") + "\n";
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `maintenance-report-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
    this.messageService.add({ severity: "success", summary: "Exported", detail: "Maintenance report exported to CSV" });
  }
  printReport() {
    window.print();
  }
  static \u0275fac = function MaintenanceReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaintenanceReportComponent)(\u0275\u0275directiveInject(MaintenanceService), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaintenanceReportComponent, selectors: [["app-maintenance-report"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 54, vars: 9, consts: [["start", ""], ["end", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["styleClass", "mb-4"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-4", "mb-6"], [1, "p-4", "bg-blue-50", "rounded-lg"], [1, "text-gray-600", "text-sm"], [1, "text-3xl", "font-bold", "text-blue-600"], [1, "p-4", "bg-yellow-50", "rounded-lg"], [1, "text-3xl", "font-bold", "text-yellow-600"], [1, "p-4", "bg-green-50", "rounded-lg"], [1, "text-3xl", "font-bold", "text-green-600"], [1, "p-4", "bg-purple-50", "rounded-lg"], [1, "text-3xl", "font-bold", "text-purple-600"], [1, "mb-4"], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [3, "value"], [1, "text-2xl", "font-bold"], ["label", "Export to CSV", "icon", "pi pi-download", "severity", "success", 3, "onClick"], ["label", "Print", "icon", "pi pi-print", "severity", "info", 1, "ml-2", 3, "onClick"], [1, "flex", "gap-4", "p-4", "flex-wrap"], [1, "flex-1", "min-w-[200px]"], [1, "block", "text-sm", "font-medium", "mb-2"], ["placeholder", "All Status", 3, "ngModelChange", "onChange", "ngModel", "options"], ["placeholder", "All Priorities", 3, "ngModelChange", "onChange", "ngModel", "options"], [1, "flex", "items-end"], ["label", "Clear Filters", "icon", "pi pi-times", "severity", "secondary", 3, "onClick"], ["pSortableColumn", ""], ["field", "maintenanceName"], ["field", "maintenanceTypeName"], ["field", "createdDate"], [3, "value", "severity"], ["colspan", "6", 1, "text-center", "p-4"], [1, "text-lg", "font-bold", "p-4"]], template: function MaintenanceReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 5);
      \u0275\u0275template(2, MaintenanceReportComponent_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, MaintenanceReportComponent_ng_template_4_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "p", 8);
      \u0275\u0275text(9, "Total Requests");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 9);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10)(13, "p", 8);
      \u0275\u0275text(14, "Pending");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 11);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "p", 8);
      \u0275\u0275text(19, "Approved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 13);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 14)(23, "p", 8);
      \u0275\u0275text(24, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 15);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "p-card", 16);
      \u0275\u0275template(28, MaintenanceReportComponent_ng_template_28_Template, 11, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(30, "p-table", 17);
      \u0275\u0275template(31, MaintenanceReportComponent_ng_template_31_Template, 16, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(33, MaintenanceReportComponent_ng_template_33_Template, 13, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(35, MaintenanceReportComponent_ng_template_35_Template, 3, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 18)(38, "p-card");
      \u0275\u0275template(39, MaintenanceReportComponent_ng_template_39_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(41, "p-table", 19);
      \u0275\u0275template(42, MaintenanceReportComponent_ng_template_42_Template, 7, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(44, MaintenanceReportComponent_ng_template_44_Template, 7, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "p-card");
      \u0275\u0275template(47, MaintenanceReportComponent_ng_template_47_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(49, "p-table", 19);
      \u0275\u0275template(50, MaintenanceReportComponent_ng_template_50_Template, 7, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(52, MaintenanceReportComponent_ng_template_52_Template, 7, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.maintenanceRequests.length);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getPendingCount());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getApprovedCount());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getCompletedCount());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.filteredRequests)("paginator", true)("rows", 10);
      \u0275\u0275advance(11);
      \u0275\u0275property("value", ctx.getStatusBreakdown());
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.getPriorityBreakdown());
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, ButtonModule, Button, TableModule, Table, SortableColumn, SortIcon, SelectModule, Select, CardModule, Card, ToastModule, Toast, ToolbarModule, Toolbar, TagModule, Tag, DatePickerModule], styles: ["\n\n[_nghost-%COMP%]     .p-card {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=maintenance-report.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenanceReportComponent, [{
    type: Component,
    args: [{ selector: "app-maintenance-report", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, TableModule, SelectModule, CardModule, ToastModule, ToolbarModule, TagModule, DatePickerModule], providers: [MessageService], template: `
        <p-toast />

        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <h2 class="text-2xl font-bold">Maintenance Report</h2>
            </ng-template>
            <ng-template #end>
                <p-button label="Export to CSV" icon="pi pi-download" severity="success" (onClick)="exportToCSV()" />
                <p-button label="Print" icon="pi pi-print" severity="info" (onClick)="printReport()" class="ml-2" />
            </ng-template>
        </p-toolbar>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div class="p-4 bg-blue-50 rounded-lg">
                <p class="text-gray-600 text-sm">Total Requests</p>
                <p class="text-3xl font-bold text-blue-600">{{ maintenanceRequests.length }}</p>
            </div>
            <div class="p-4 bg-yellow-50 rounded-lg">
                <p class="text-gray-600 text-sm">Pending</p>
                <p class="text-3xl font-bold text-yellow-600">{{ getPendingCount() }}</p>
            </div>
            <div class="p-4 bg-green-50 rounded-lg">
                <p class="text-gray-600 text-sm">Approved</p>
                <p class="text-3xl font-bold text-green-600">{{ getApprovedCount() }}</p>
            </div>
            <div class="p-4 bg-purple-50 rounded-lg">
                <p class="text-gray-600 text-sm">Completed</p>
                <p class="text-3xl font-bold text-purple-600">{{ getCompletedCount() }}</p>
            </div>
        </div>

        <p-card class="mb-4">
            <ng-template #header>
                <div class="flex gap-4 p-4 flex-wrap">
                    <div class="flex-1 min-w-[200px]">
                        <label class="block text-sm font-medium mb-2">Status Filter</label>
                        <p-select [(ngModel)]="selectedStatus" [options]="['Pending', 'Approved', 'Completed', 'All']" placeholder="All Status" (onChange)="filterRequests()" />
                    </div>
                    <div class="flex-1 min-w-[200px]">
                        <label class="block text-sm font-medium mb-2">Priority Filter</label>
                        <p-select [(ngModel)]="selectedPriority" [options]="['Urgent', 'High', 'Normal', 'Low', 'All']" placeholder="All Priorities" (onChange)="filterRequests()" />
                    </div>
                    <div class="flex items-end">
                        <p-button label="Clear Filters" icon="pi pi-times" severity="secondary" (onClick)="clearFilters()" />
                    </div>
                </div>
            </ng-template>

            <p-table [value]="filteredRequests" responsiveLayout="scroll" [paginator]="true" [rows]="10">
                <ng-template #header>
                    <tr>
                        <th pSortableColumn>Request Name <p-sortIcon field="maintenanceName" /></th>
                        <th pSortableColumn>Type <p-sortIcon field="maintenanceTypeName" /></th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Service</th>
                        <th pSortableColumn>Date <p-sortIcon field="createdDate" /></th>
                    </tr>
                </ng-template>
                <ng-template #body let-req>
                    <tr>
                        <td>{{ req.maintenanceName || 'N/A' }}</td>
                        <td>{{ req.maintenanceTypeName || 'N/A' }}</td>
                        <td>
                            <p-tag [value]="getPriorityLabel(req.priorityLevelName)" [severity]="getPrioritySeverity(req.priorityLevelName)" />
                        </td>
                        <td>
                            <p-tag [value]="req.requestStatusName || 'Pending'" [severity]="getStatusSeverity(req.requestStatusName)" />
                        </td>
                        <td>{{ req.serviceMaintenanceName || 'N/A' }}</td>
                        <td>{{ formatDate(req.createdDate) }}</td>
                    </tr>
                </ng-template>
                <ng-template #emptymessage>
                    <tr>
                        <td colspan="6" class="text-center p-4">No maintenance requests found.</td>
                    </tr>
                </ng-template>
            </p-table>
        </p-card>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p-card>
                <ng-template #header>
                    <h3 class="text-lg font-bold p-4">Requests by Status</h3>
                </ng-template>
                <p-table [value]="getStatusBreakdown()">
                    <ng-template #header>
                        <tr>
                            <th>Status</th>
                            <th>Count</th>
                            <th>Percentage</th>
                        </tr>
                    </ng-template>
                    <ng-template #body let-row>
                        <tr>
                            <td>{{ row.status }}</td>
                            <td>{{ row.count }}</td>
                            <td>{{ ((row.count / maintenanceRequests.length) * 100).toFixed(2) }}%</td>
                        </tr>
                    </ng-template>
                </p-table>
            </p-card>

            <p-card>
                <ng-template #header>
                    <h3 class="text-lg font-bold p-4">Requests by Priority</h3>
                </ng-template>
                <p-table [value]="getPriorityBreakdown()">
                    <ng-template #header>
                        <tr>
                            <th>Priority</th>
                            <th>Count</th>
                            <th>Percentage</th>
                        </tr>
                    </ng-template>
                    <ng-template #body let-row>
                        <tr>
                            <td>{{ row.priority }}</td>
                            <td>{{ row.count }}</td>
                            <td>{{ ((row.count / maintenanceRequests.length) * 100).toFixed(2) }}%</td>
                        </tr>
                    </ng-template>
                </p-table>
            </p-card>
        </div>
    `, styles: ["/* angular:styles/component:scss;04dfea9770f394ef530fb5d3ebede3b62d2c700c87360ee8901fa307b2d73844;C:/Users/jeric/Documents/2026 files/LAMS-COPY/LAMS-COPY/src/app/pages/reports/maintenance-report/maintenance-report.ts */\n:host ::ng-deep .p-card {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=maintenance-report.css.map */\n"] }]
  }], () => [{ type: MaintenanceService }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaintenanceReportComponent, { className: "MaintenanceReportComponent", filePath: "src/app/pages/reports/maintenance-report/maintenance-report.ts", lineNumber: 158 });
})();

// src/app/pages/reports/schedule-report/schedule-report.ts
var _c017 = () => ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "All"];
function ScheduleReportComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 18);
    \u0275\u0275text(1, "Lab Schedule Report");
    \u0275\u0275elementEnd();
  }
}
function ScheduleReportComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 19);
    \u0275\u0275listener("onClick", function ScheduleReportComponent_ng_template_4_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportToCSV());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 20);
    \u0275\u0275listener("onClick", function ScheduleReportComponent_ng_template_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printReport());
    });
    \u0275\u0275elementEnd();
  }
}
function ScheduleReportComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "label", 23);
    \u0275\u0275text(3, "Laboratory Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function ScheduleReportComponent_ng_template_23_Template_p_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedLaboratory, $event) || (ctx_r1.selectedLaboratory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function ScheduleReportComponent_ng_template_23_Template_p_select_onChange_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterSchedules());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 22)(6, "label", 23);
    \u0275\u0275text(7, "Day Filter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ScheduleReportComponent_ng_template_23_Template_p_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedDay, $event) || (ctx_r1.selectedDay = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function ScheduleReportComponent_ng_template_23_Template_p_select_onChange_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterSchedules());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 26)(10, "p-button", 27);
    \u0275\u0275listener("onClick", function ScheduleReportComponent_ng_template_23_Template_p_button_onClick_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedLaboratory);
    \u0275\u0275property("options", ctx_r1.laboratories)("showClear", true);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedDay);
    \u0275\u0275property("options", \u0275\u0275pureFunction0(5, _c017));
  }
}
function ScheduleReportComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 28);
    \u0275\u0275text(2, "Laboratory ");
    \u0275\u0275element(3, "p-sortIcon", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 28);
    \u0275\u0275text(5, "Day ");
    \u0275\u0275element(6, "p-sortIcon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 28);
    \u0275\u0275text(8, "Start Time ");
    \u0275\u0275element(9, "p-sortIcon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 28);
    \u0275\u0275text(11, "End Time ");
    \u0275\u0275element(12, "p-sortIcon", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Instructor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Subject");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleReportComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sched_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sched_r4.laboratoryName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDay(sched_r4.dayOfWeek));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sched_r4.startTime || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sched_r4.endTime || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sched_r4.instructorName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sched_r4.subjectName || "N/A");
  }
}
function ScheduleReportComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2, "No schedules found matching the selected filters.");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleReportComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 34);
    \u0275\u0275text(1, "Schedules by Laboratory");
    \u0275\u0275elementEnd();
  }
}
function ScheduleReportComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Laboratory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Schedules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Percentage");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleReportComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.laboratory);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (row_r5.count / ctx_r1.schedules.length * 100).toFixed(2), "%");
  }
}
function ScheduleReportComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 34);
    \u0275\u0275text(1, "Schedules by Day");
    \u0275\u0275elementEnd();
  }
}
function ScheduleReportComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Schedules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Percentage");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleReportComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.day);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (row_r6.count / ctx_r1.schedules.length * 100).toFixed(2), "%");
  }
}
var ScheduleReportComponent = class _ScheduleReportComponent {
  http;
  messageService;
  schedules = [];
  filteredSchedules = [];
  laboratories = [];
  selectedLaboratory = "";
  selectedDay = "";
  daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  constructor(http, messageService) {
    this.http = http;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.loadLaboratories();
    this.loadSchedules();
  }
  loadLaboratories() {
    this.http.get(`${environment.apiUrl}/laboratories`).subscribe({
      next: (data) => {
        this.laboratories = data;
        console.log("\u2705 Laboratories loaded:", this.laboratories.length);
      },
      error: (err) => {
        console.error("\u274C Error loading laboratories:", err);
      }
    });
  }
  loadSchedules() {
    this.http.get(`${environment.apiUrl}/schedules`).subscribe({
      next: (data) => {
        this.schedules = data;
        this.filteredSchedules = data;
        console.log("\u2705 Schedules loaded:", this.schedules.length);
      },
      error: (err) => {
        console.error("\u274C Error loading schedules:", err);
        this.messageService.add({ severity: "error", summary: "Error", detail: "Failed to load schedules" });
      }
    });
  }
  filterSchedules() {
    this.filteredSchedules = this.schedules.filter((sched) => {
      const matchLab = !this.selectedLaboratory || sched.laboratoryId === this.selectedLaboratory;
      const matchDay = !this.selectedDay || this.formatDay(sched.dayOfWeek) === this.selectedDay;
      return matchLab && matchDay;
    });
  }
  clearFilters() {
    this.selectedLaboratory = "";
    this.selectedDay = "";
    this.filteredSchedules = this.schedules;
  }
  formatDay(dayNum) {
    return this.daysOfWeek[dayNum] || `Day ${dayNum}`;
  }
  getLaboratoriesCount() {
    return new Set(this.schedules.map((s) => s.laboratoryId)).size;
  }
  getInstructorsCount() {
    return new Set(this.schedules.map((s) => s.instructorId)).size;
  }
  getLaboratoryBreakdown() {
    const breakdown = {};
    this.schedules.forEach((sched) => {
      const labId = sched.laboratoryId;
      const labName = sched.laboratoryName || `Lab ${labId}`;
      if (!breakdown[labId]) {
        breakdown[labId] = { laboratory: labName, count: 0 };
      }
      breakdown[labId].count++;
    });
    return Object.values(breakdown);
  }
  getDayBreakdown() {
    const breakdown = {};
    this.schedules.forEach((sched) => {
      const day = this.formatDay(sched.dayOfWeek);
      breakdown[day] = (breakdown[day] || 0) + 1;
    });
    return Object.entries(breakdown).map(([day, count]) => ({ day, count }));
  }
  exportToCSV() {
    const headers = ["Laboratory", "Day", "Start Time", "End Time", "Instructor", "Subject"];
    const rows = this.filteredSchedules.map((s) => [s.laboratoryName || "N/A", this.formatDay(s.dayOfWeek), s.startTime || "N/A", s.endTime || "N/A", s.instructorName || "N/A", s.subjectName || "N/A"]);
    let csv = headers.join(",") + "\n";
    rows.forEach((row) => {
      csv += row.map((cell) => `"${cell}"`).join(",") + "\n";
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `schedule-report-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
    this.messageService.add({ severity: "success", summary: "Exported", detail: "Schedule report exported to CSV" });
  }
  printReport() {
    window.print();
  }
  static \u0275fac = function ScheduleReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleReportComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(MessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleReportComponent, selectors: [["app-schedule-report"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 49, vars: 8, consts: [["start", ""], ["end", ""], ["header", ""], ["body", ""], ["emptymessage", ""], ["styleClass", "mb-4"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "mb-6"], [1, "p-4", "bg-blue-50", "rounded-lg"], [1, "text-gray-600", "text-sm"], [1, "text-3xl", "font-bold", "text-blue-600"], [1, "p-4", "bg-green-50", "rounded-lg"], [1, "text-3xl", "font-bold", "text-green-600"], [1, "p-4", "bg-orange-50", "rounded-lg"], [1, "text-3xl", "font-bold", "text-orange-600"], [1, "mb-4"], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [3, "value"], [1, "text-2xl", "font-bold"], ["label", "Export to CSV", "icon", "pi pi-download", "severity", "success", 3, "onClick"], ["label", "Print", "icon", "pi pi-print", "severity", "info", 1, "ml-2", 3, "onClick"], [1, "flex", "gap-4", "p-4", "flex-wrap"], [1, "flex-1", "min-w-[200px]"], [1, "block", "text-sm", "font-medium", "mb-2"], ["optionLabel", "laboratoryName", "optionValue", "laboratoryId", "placeholder", "All Laboratories", 3, "ngModelChange", "onChange", "ngModel", "options", "showClear"], ["placeholder", "All Days", 3, "ngModelChange", "onChange", "ngModel", "options"], [1, "flex", "items-end"], ["label", "Clear Filters", "icon", "pi pi-times", "severity", "secondary", 3, "onClick"], ["pSortableColumn", ""], ["field", "laboratoryName"], ["field", "dayOfWeek"], ["field", "startTime"], ["field", "endTime"], ["colspan", "6", 1, "text-center", "p-4"], [1, "text-lg", "font-bold", "p-4"]], template: function ScheduleReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-toolbar", 5);
      \u0275\u0275template(2, ScheduleReportComponent_ng_template_2_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, ScheduleReportComponent_ng_template_4_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "p", 8);
      \u0275\u0275text(9, "Total Schedules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 9);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 10)(13, "p", 8);
      \u0275\u0275text(14, "Laboratories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 11);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "p", 8);
      \u0275\u0275text(19, "Instructors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p", 13);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "p-card", 14);
      \u0275\u0275template(23, ScheduleReportComponent_ng_template_23_Template, 11, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(25, "p-table", 15);
      \u0275\u0275template(26, ScheduleReportComponent_ng_template_26_Template, 17, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(28, ScheduleReportComponent_ng_template_28_Template, 13, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(30, ScheduleReportComponent_ng_template_30_Template, 3, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 16)(33, "p-card");
      \u0275\u0275template(34, ScheduleReportComponent_ng_template_34_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(36, "p-table", 17);
      \u0275\u0275template(37, ScheduleReportComponent_ng_template_37_Template, 7, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(39, ScheduleReportComponent_ng_template_39_Template, 7, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "p-card");
      \u0275\u0275template(42, ScheduleReportComponent_ng_template_42_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(44, "p-table", 17);
      \u0275\u0275template(45, ScheduleReportComponent_ng_template_45_Template, 7, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(47, ScheduleReportComponent_ng_template_47_Template, 7, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.schedules.length);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getLaboratoriesCount());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.getInstructorsCount());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.filteredSchedules)("paginator", true)("rows", 15);
      \u0275\u0275advance(11);
      \u0275\u0275property("value", ctx.getLaboratoryBreakdown());
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.getDayBreakdown());
    }
  }, dependencies: [CommonModule, FormsModule, NgControlStatus, NgModel, ButtonModule, Button, TableModule, Table, SortableColumn, SortIcon, SelectModule, Select, CardModule, Card, ToastModule, Toast, ToolbarModule, Toolbar, DatePickerModule], styles: ["\n\n[_nghost-%COMP%]     .p-card {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=schedule-report.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleReportComponent, [{
    type: Component,
    args: [{ selector: "app-schedule-report", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, TableModule, SelectModule, CardModule, ToastModule, ToolbarModule, DatePickerModule], providers: [MessageService], template: `
        <p-toast />

        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <h2 class="text-2xl font-bold">Lab Schedule Report</h2>
            </ng-template>
            <ng-template #end>
                <p-button label="Export to CSV" icon="pi pi-download" severity="success" (onClick)="exportToCSV()" />
                <p-button label="Print" icon="pi pi-print" severity="info" (onClick)="printReport()" class="ml-2" />
            </ng-template>
        </p-toolbar>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div class="p-4 bg-blue-50 rounded-lg">
                <p class="text-gray-600 text-sm">Total Schedules</p>
                <p class="text-3xl font-bold text-blue-600">{{ schedules.length }}</p>
            </div>
            <div class="p-4 bg-green-50 rounded-lg">
                <p class="text-gray-600 text-sm">Laboratories</p>
                <p class="text-3xl font-bold text-green-600">{{ getLaboratoriesCount() }}</p>
            </div>
            <div class="p-4 bg-orange-50 rounded-lg">
                <p class="text-gray-600 text-sm">Instructors</p>
                <p class="text-3xl font-bold text-orange-600">{{ getInstructorsCount() }}</p>
            </div>
        </div>

        <p-card class="mb-4">
            <ng-template #header>
                <div class="flex gap-4 p-4 flex-wrap">
                    <div class="flex-1 min-w-[200px]">
                        <label class="block text-sm font-medium mb-2">Laboratory Filter</label>
                        <p-select [(ngModel)]="selectedLaboratory" [options]="laboratories" optionLabel="laboratoryName" optionValue="laboratoryId" placeholder="All Laboratories" [showClear]="true" (onChange)="filterSchedules()" />
                    </div>
                    <div class="flex-1 min-w-[200px]">
                        <label class="block text-sm font-medium mb-2">Day Filter</label>
                        <p-select [(ngModel)]="selectedDay" [options]="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'All']" placeholder="All Days" (onChange)="filterSchedules()" />
                    </div>
                    <div class="flex items-end">
                        <p-button label="Clear Filters" icon="pi pi-times" severity="secondary" (onClick)="clearFilters()" />
                    </div>
                </div>
            </ng-template>

            <p-table [value]="filteredSchedules" responsiveLayout="scroll" [paginator]="true" [rows]="15">
                <ng-template #header>
                    <tr>
                        <th pSortableColumn>Laboratory <p-sortIcon field="laboratoryName" /></th>
                        <th pSortableColumn>Day <p-sortIcon field="dayOfWeek" /></th>
                        <th pSortableColumn>Start Time <p-sortIcon field="startTime" /></th>
                        <th pSortableColumn>End Time <p-sortIcon field="endTime" /></th>
                        <th>Instructor</th>
                        <th>Subject</th>
                    </tr>
                </ng-template>
                <ng-template #body let-sched>
                    <tr>
                        <td>{{ sched.laboratoryName || 'N/A' }}</td>
                        <td>{{ formatDay(sched.dayOfWeek) }}</td>
                        <td>{{ sched.startTime || 'N/A' }}</td>
                        <td>{{ sched.endTime || 'N/A' }}</td>
                        <td>{{ sched.instructorName || 'N/A' }}</td>
                        <td>{{ sched.subjectName || 'N/A' }}</td>
                    </tr>
                </ng-template>
                <ng-template #emptymessage>
                    <tr>
                        <td colspan="6" class="text-center p-4">No schedules found matching the selected filters.</td>
                    </tr>
                </ng-template>
            </p-table>
        </p-card>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p-card>
                <ng-template #header>
                    <h3 class="text-lg font-bold p-4">Schedules by Laboratory</h3>
                </ng-template>
                <p-table [value]="getLaboratoryBreakdown()">
                    <ng-template #header>
                        <tr>
                            <th>Laboratory</th>
                            <th>Schedules</th>
                            <th>Percentage</th>
                        </tr>
                    </ng-template>
                    <ng-template #body let-row>
                        <tr>
                            <td>{{ row.laboratory }}</td>
                            <td>{{ row.count }}</td>
                            <td>{{ ((row.count / schedules.length) * 100).toFixed(2) }}%</td>
                        </tr>
                    </ng-template>
                </p-table>
            </p-card>

            <p-card>
                <ng-template #header>
                    <h3 class="text-lg font-bold p-4">Schedules by Day</h3>
                </ng-template>
                <p-table [value]="getDayBreakdown()">
                    <ng-template #header>
                        <tr>
                            <th>Day</th>
                            <th>Schedules</th>
                            <th>Percentage</th>
                        </tr>
                    </ng-template>
                    <ng-template #body let-row>
                        <tr>
                            <td>{{ row.day }}</td>
                            <td>{{ row.count }}</td>
                            <td>{{ ((row.count / schedules.length) * 100).toFixed(2) }}%</td>
                        </tr>
                    </ng-template>
                </p-table>
            </p-card>
        </div>
    `, styles: ["/* angular:styles/component:scss;04dfea9770f394ef530fb5d3ebede3b62d2c700c87360ee8901fa307b2d73844;C:/Users/jeric/Documents/2026 files/LAMS-COPY/LAMS-COPY/src/app/pages/reports/schedule-report/schedule-report.ts */\n:host ::ng-deep .p-card {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=schedule-report.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleReportComponent, { className: "ScheduleReportComponent", filePath: "src/app/pages/reports/schedule-report/schedule-report.ts", lineNumber: 150 });
})();

// src/app/pages/reports/reports.component.ts
function ReportsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Asset Report");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 8);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Maintenance Report");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Schedule Report");
    \u0275\u0275elementEnd();
  }
}
var ReportsComponent = class _ReportsComponent {
  router;
  constructor(router) {
    this.router = router;
  }
  static \u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], decls: 23, vars: 0, consts: [["header", ""], [1, "mb-6"], [1, "text-3xl", "font-bold", "mb-4"], [1, "text-gray-600"], ["value", "assets"], ["value", "maintenance"], ["value", "schedule"], [1, "pi", "pi-box", "mr-2"], [1, "pi", "pi-wrench", "mr-2"], [1, "pi", "pi-calendar", "mr-2"]], template: function ReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
      \u0275\u0275text(2, "Reports & Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 3);
      \u0275\u0275text(4, "Access comprehensive reports and analytics for asset management, maintenance, and scheduling.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "p-tabs")(6, "p-tablist")(7, "p-tab", 4);
      \u0275\u0275template(8, ReportsComponent_ng_template_8_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p-tab", 5);
      \u0275\u0275template(11, ReportsComponent_ng_template_11_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p-tab", 6);
      \u0275\u0275template(14, ReportsComponent_ng_template_14_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "p-tabpanels")(17, "p-tabpanel", 4);
      \u0275\u0275element(18, "app-asset-report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p-tabpanel", 5);
      \u0275\u0275element(20, "app-maintenance-report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p-tabpanel", 6);
      \u0275\u0275element(22, "app-schedule-report");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, RouterModule, ButtonModule, TabsModule, Tabs, TabPanels, TabPanel, TabList, Tab, CardModule, AssetReportComponent, MaintenanceReportComponent, ScheduleReportComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  padding: 1rem;\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsComponent, [{
    type: Component,
    args: [{ selector: "app-reports", standalone: true, imports: [CommonModule, RouterModule, ButtonModule, TabsModule, CardModule, AssetReportComponent, MaintenanceReportComponent, ScheduleReportComponent], template: `
        <div class="mb-6">
            <h1 class="text-3xl font-bold mb-4">Reports & Analytics</h1>
            <p class="text-gray-600">Access comprehensive reports and analytics for asset management, maintenance, and scheduling.</p>
        </div>

        <p-tabs>
            <p-tablist>
                <p-tab value="assets">
                    <ng-template #header>
                        <i class="pi pi-box mr-2"></i>
                        <span>Asset Report</span>
                    </ng-template>
                </p-tab>
                <p-tab value="maintenance">
                    <ng-template #header>
                        <i class="pi pi-wrench mr-2"></i>
                        <span>Maintenance Report</span>
                    </ng-template>
                </p-tab>
                <p-tab value="schedule">
                    <ng-template #header>
                        <i class="pi pi-calendar mr-2"></i>
                        <span>Schedule Report</span>
                    </ng-template>
                </p-tab>
            </p-tablist>
            <p-tabpanels>
                <p-tabpanel value="assets">
                    <app-asset-report />
                </p-tabpanel>
                <p-tabpanel value="maintenance">
                    <app-maintenance-report />
                </p-tabpanel>
                <p-tabpanel value="schedule">
                    <app-schedule-report />
                </p-tabpanel>
            </p-tabpanels>
        </p-tabs>
    `, styles: ["/* angular:styles/component:scss;882d82c0456aee77d3ab1c1353f0b9b31436c623c597ccb011fdf431a6e79c90;C:/Users/jeric/Documents/2026 files/LAMS-COPY/LAMS-COPY/src/app/pages/reports/reports.component.ts */\n:host {\n  display: block;\n  padding: 1rem;\n}\n/*# sourceMappingURL=reports.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src/app/pages/reports/reports.component.ts", lineNumber: 64 });
})();

// node_modules/@primeuix/styles/dist/progressspinner/index.mjs
var style = "\n    .p-progressspinner {\n        position: relative;\n        margin: 0 auto;\n        width: 100px;\n        height: 100px;\n        display: inline-block;\n    }\n\n    .p-progressspinner::before {\n        content: '';\n        display: block;\n        padding-top: 100%;\n    }\n\n    .p-progressspinner-spin {\n        height: 100%;\n        transform-origin: center center;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto;\n        animation: p-progressspinner-rotate 2s linear infinite;\n    }\n\n    .p-progressspinner-circle {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: 0;\n        stroke: dt('progressspinner.colorOne');\n        animation:\n            p-progressspinner-dash 1.5s ease-in-out infinite,\n            p-progressspinner-color 6s ease-in-out infinite;\n        stroke-linecap: round;\n    }\n\n    @keyframes p-progressspinner-rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes p-progressspinner-dash {\n        0% {\n            stroke-dasharray: 1, 200;\n            stroke-dashoffset: 0;\n        }\n        50% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -35px;\n        }\n        100% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -124px;\n        }\n    }\n    @keyframes p-progressspinner-color {\n        100%,\n        0% {\n            stroke: dt('progressspinner.color.one');\n        }\n        40% {\n            stroke: dt('progressspinner.color.two');\n        }\n        66% {\n            stroke: dt('progressspinner.color.three');\n        }\n        80%,\n        90% {\n            stroke: dt('progressspinner.color.four');\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-progressspinner.mjs
var classes = {
  root: () => ["p-progressspinner"],
  spin: "p-progressspinner-spin",
  circle: "p-progressspinner-circle"
};
var ProgressSpinnerStyle = class _ProgressSpinnerStyle extends BaseStyle {
  name = "progressspinner";
  style = style;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinnerStyle_BaseFactory;
    return function ProgressSpinnerStyle_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinnerStyle_BaseFactory || (\u0275ProgressSpinnerStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinnerStyle)))(__ngFactoryType__ || _ProgressSpinnerStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressSpinnerStyle,
    factory: _ProgressSpinnerStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressSpinnerClasses;
(function(ProgressSpinnerClasses2) {
  ProgressSpinnerClasses2["root"] = "p-progressspinner";
  ProgressSpinnerClasses2["spin"] = "p-progressspinner-spin";
  ProgressSpinnerClasses2["circle"] = "p-progressspinner-circle";
})(ProgressSpinnerClasses || (ProgressSpinnerClasses = {}));
var PROGRESSSPINNER_INSTANCE = new InjectionToken("PROGRESSSPINNER_INSTANCE");
var ProgressSpinner = class _ProgressSpinner extends BaseComponent {
  $pcProgressSpinner = inject(PROGRESSSPINNER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Width of the circle stroke.
   * @group Props
   */
  strokeWidth = "2";
  /**
   * Color for the background of the circle.
   * @group Props
   */
  fill = "none";
  /**
   * Duration of the rotate animation.
   * @group Props
   */
  animationDuration = "2s";
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  _componentStyle = inject(ProgressSpinnerStyle);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressSpinner_BaseFactory;
    return function ProgressSpinner_Factory(__ngFactoryType__) {
      return (\u0275ProgressSpinner_BaseFactory || (\u0275ProgressSpinner_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressSpinner)))(__ngFactoryType__ || _ProgressSpinner);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressSpinner,
    selectors: [["p-progressSpinner"], ["p-progress-spinner"], ["p-progressspinner"]],
    hostVars: 5,
    hostBindings: function ProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel)("role", "progressbar")("aria-busy", true);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      strokeWidth: "strokeWidth",
      fill: "fill",
      animationDuration: "animationDuration",
      ariaLabel: "ariaLabel"
    },
    features: [\u0275\u0275ProvidersFeature([ProgressSpinnerStyle, {
      provide: PROGRESSSPINNER_INSTANCE,
      useExisting: _ProgressSpinner
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ProgressSpinner
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 10,
    consts: [["viewBox", "25 25 50 50", 3, "pBind"], ["cx", "50", "cy", "50", "r", "20", "stroke-miterlimit", "10", 3, "pBind"]],
    template: function ProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275element(1, "circle", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("spin"));
        \u0275\u0275styleProp("animation-duration", ctx.animationDuration);
        \u0275\u0275property("pBind", ctx.ptm("spin"));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.cx("circle"));
        \u0275\u0275property("pBind", ctx.ptm("circle"));
        \u0275\u0275attribute("fill", ctx.fill)("stroke-width", ctx.strokeWidth);
      }
    },
    dependencies: [CommonModule, SharedModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinner, [{
    type: Component,
    args: [{
      selector: "p-progressSpinner, p-progress-spinner, p-progressspinner",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      template: `
        <svg [class]="cx('spin')" [pBind]="ptm('spin')" viewBox="25 25 50 50" [style.animation-duration]="animationDuration">
            <circle [class]="cx('circle')" [pBind]="ptm('circle')" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10" />
        </svg>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ProgressSpinnerStyle, {
        provide: PROGRESSSPINNER_INSTANCE,
        useExisting: ProgressSpinner
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ProgressSpinner
      }],
      host: {
        "[attr.aria-label]": "ariaLabel",
        "[attr.role]": "'progressbar'",
        "[attr.aria-busy]": "true",
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
var ProgressSpinnerModule = class _ProgressSpinnerModule {
  static \u0275fac = function ProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressSpinnerModule,
    imports: [ProgressSpinner, SharedModule],
    exports: [ProgressSpinner, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ProgressSpinner, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [ProgressSpinner, SharedModule],
      exports: [ProgressSpinner, SharedModule]
    }]
  }], null, null);
})();

// src/app/pages/service/report.service.ts
var ReportService = class _ReportService {
  http;
  baseApiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  // Asset Reports
  getAssetReportData() {
    const url = `${this.baseApiUrl}/reports/assets`;
    console.log("\u{1F4CA} Fetching Asset Report:", url);
    return this.http.get(url);
  }
  getAssetReportCSV() {
    return this.http.get(`${this.baseApiUrl}/reports/assets/export`, {
      responseType: "blob"
    });
  }
  // Maintenance Reports
  getMaintenanceReportData() {
    const url = `${this.baseApiUrl}/reports/maintenance`;
    console.log("\u{1F4CA} Fetching Maintenance Report:", url);
    return this.http.get(url);
  }
  getMaintenanceReportCSV() {
    return this.http.get(`${this.baseApiUrl}/reports/maintenance/export`, {
      responseType: "blob"
    });
  }
  // Schedule Reports
  getScheduleReportData() {
    const url = `${this.baseApiUrl}/reports/schedules`;
    console.log("\u{1F4CA} Fetching Schedule Report:", url);
    return this.http.get(url);
  }
  getScheduleReportCSV() {
    return this.http.get(`${this.baseApiUrl}/reports/schedules/export`, {
      responseType: "blob"
    });
  }
  // Advanced Filtering Reports
  getAssetReportFiltered(filters) {
    let url = `${this.baseApiUrl}/reports/assets/filter`;
    const params = new URLSearchParams();
    if (filters.category)
      params.append("category", filters.category);
    if (filters.status)
      params.append("status", filters.status);
    if (filters.location)
      params.append("location", filters.location);
    if (params.toString()) {
      url += "?" + params.toString();
    }
    return this.http.get(url);
  }
  getMaintenanceReportFiltered(filters) {
    let url = `${this.baseApiUrl}/reports/maintenance/filter`;
    const params = new URLSearchParams();
    if (filters.status)
      params.append("status", filters.status);
    if (filters.priority)
      params.append("priority", filters.priority);
    if (filters.dateFrom)
      params.append("dateFrom", filters.dateFrom);
    if (filters.dateTo)
      params.append("dateTo", filters.dateTo);
    if (params.toString()) {
      url += "?" + params.toString();
    }
    return this.http.get(url);
  }
  getScheduleReportFiltered(filters) {
    let url = `${this.baseApiUrl}/reports/schedules/filter`;
    const params = new URLSearchParams();
    if (filters.laboratory)
      params.append("laboratory", filters.laboratory);
    if (filters.day)
      params.append("day", filters.day);
    if (filters.dateFrom)
      params.append("dateFrom", filters.dateFrom);
    if (filters.dateTo)
      params.append("dateTo", filters.dateTo);
    if (params.toString()) {
      url += "?" + params.toString();
    }
    return this.http.get(url);
  }
  // Dashboard Summary
  getDashboardSummary() {
    const url = `${this.baseApiUrl}/reports/dashboard-summary`;
    console.log("\u{1F4CA} Fetching Dashboard Summary:", url);
    return this.http.get(url);
  }
  // Maintenance Reports - New Endpoints
  getDailyPreventiveReport(date, laboratoryId) {
    const url = `${this.baseApiUrl}/reports/preventive-maintenance/daily?date=${date}&laboratoryId=${laboratoryId}`;
    console.log("\u{1F4CA} Fetching Daily Preventive Report:", url);
    return this.http.get(url);
  }
  getMonthlyPreventiveReport(month, year, laboratoryId) {
    const url = `${this.baseApiUrl}/reports/preventive-maintenance/monthly?month=${month}&year=${year}&laboratoryId=${laboratoryId}`;
    console.log("\u{1F4CA} Fetching Monthly Preventive Report:", url);
    return this.http.get(url);
  }
  getDailyCorrectiveReport(date, priorityLevelId) {
    let url = `${this.baseApiUrl}/reports/corrective-maintenance/daily?date=${date}`;
    if (priorityLevelId) {
      url += `&priorityLevelId=${priorityLevelId}`;
    }
    console.log("\u{1F4CA} Fetching Daily Corrective Report:", url);
    return this.http.get(url);
  }
  getMonthlyCorrectiveReport(month, year, priorityLevelId) {
    let url = `${this.baseApiUrl}/reports/corrective-maintenance/monthly?month=${month}&year=${year}`;
    if (priorityLevelId) {
      url += `&priorityLevelId=${priorityLevelId}`;
    }
    console.log("\u{1F4CA} Fetching Monthly Corrective Report:", url);
    return this.http.get(url);
  }
  // Calibration Reports
  getDailyCalibrationReport(date) {
    const url = `${this.baseApiUrl}/reports/calibration-maintenance/daily?date=${date}`;
    console.log("\u{1F4CA} Fetching Daily Calibration Report:", url);
    return this.http.get(url);
  }
  getMonthlyCalibrationReport(month, year) {
    const url = `${this.baseApiUrl}/reports/calibration-maintenance/monthly?month=${month}&year=${year}`;
    console.log("\u{1F4CA} Fetching Monthly Calibration Report:", url);
    return this.http.get(url);
  }
  static \u0275fac = function ReportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportService, factory: _ReportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/reports/preventive-report.ts
var _c018 = () => [10, 20, 30];
var _c116 = () => ({ "min-width": "60rem" });
var _c27 = () => ({ "min-width": "80rem" });
function PreventiveReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 19);
    \u0275\u0275text(2, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-datepicker", 20);
    \u0275\u0275twoWayListener("ngModelChange", function PreventiveReportComponent_div_12_Template_p_datepicker_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedDate, $event) || (ctx_r1.selectedDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedDate);
  }
}
function PreventiveReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 21);
    \u0275\u0275text(2, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PreventiveReportComponent_div_13_Template_p_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedMonth, $event) || (ctx_r1.selectedMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedMonth);
    \u0275\u0275property("options", ctx_r1.months);
  }
}
function PreventiveReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 23);
    \u0275\u0275text(2, "Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function PreventiveReportComponent_div_14_Template_p_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedYear, $event) || (ctx_r1.selectedYear = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedYear);
    \u0275\u0275property("options", ctx_r1.years);
  }
}
function PreventiveReportComponent_p_message_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 25);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r1.errorMessage);
  }
}
function PreventiveReportComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "p-progressSpinner");
    \u0275\u0275elementEnd();
  }
}
function PreventiveReportComponent_div_23_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "Daily Report Details");
    \u0275\u0275elementEnd();
  }
}
function PreventiveReportComponent_div_23_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 37);
    \u0275\u0275listener("onClick", function PreventiveReportComponent_div_23_ng_template_24_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.exportCSV());
    });
    \u0275\u0275elementEnd();
  }
}
function PreventiveReportComponent_div_23_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 38);
    \u0275\u0275text(2, "Machine/Equipment/Instrument");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 39);
    \u0275\u0275text(4, "Action Taken");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 39);
    \u0275\u0275text(6, "Observation");
    \u0275\u0275elementEnd()();
  }
}
function PreventiveReportComponent_div_23_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.machineEquipmentInstrument || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.actionTaken || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.observation || "N/A");
  }
}
function PreventiveReportComponent_div_23_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2, "No records found.");
    \u0275\u0275elementEnd()();
  }
}
function PreventiveReportComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "h3", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p")(5, "strong");
    \u0275\u0275text(6, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10, "Performed By:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p")(13, "strong");
    \u0275\u0275text(14, "Assisted By:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 30)(17, "strong");
    \u0275\u0275text(18, "Recommendations:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p", 5);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "p-toolbar", 31);
    \u0275\u0275template(22, PreventiveReportComponent_div_23_ng_template_22_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(24, PreventiveReportComponent_div_23_ng_template_24_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p-table", 32);
    \u0275\u0275template(27, PreventiveReportComponent_div_23_ng_template_27_Template, 7, 0, "ng-template", 33)(28, PreventiveReportComponent_div_23_ng_template_28_Template, 7, 3, "ng-template", 34)(29, PreventiveReportComponent_div_23_ng_template_29_Template, 3, 0, "ng-template", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.reportData.laboratoryName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(ctx_r1.reportData.date));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.reportData.performedBy || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.reportData.assistedBy || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.reportData.recommendations || "No recommendations provided");
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.reportData.records)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(10, _c018))("tableStyle", \u0275\u0275pureFunction0(11, _c116));
  }
}
function PreventiveReportComponent_div_24_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "Monthly Report Details");
    \u0275\u0275elementEnd();
  }
}
function PreventiveReportComponent_div_24_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 37);
    \u0275\u0275listener("onClick", function PreventiveReportComponent_div_24_ng_template_19_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.exportCSV());
    });
    \u0275\u0275elementEnd();
  }
}
function PreventiveReportComponent_div_24_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Equipment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Serial Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Observations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Action Taken");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Remarks");
    \u0275\u0275elementEnd()();
  }
}
function PreventiveReportComponent_div_24_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, row_r8.date, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r8.machineEquipmentInstrument || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.serialNumber || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.observations || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.actionTaken || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.remarks || "N/A");
  }
}
function PreventiveReportComponent_div_24_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 41);
    \u0275\u0275text(2, "No records found.");
    \u0275\u0275elementEnd()();
  }
}
function PreventiveReportComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "h3", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p")(5, "strong");
    \u0275\u0275text(6, "Period:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10, "Campus:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p")(13, "strong");
    \u0275\u0275text(14, "Total Records:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p-toolbar", 31);
    \u0275\u0275template(17, PreventiveReportComponent_div_24_ng_template_17_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(19, PreventiveReportComponent_div_24_ng_template_19_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p-table", 32);
    \u0275\u0275template(22, PreventiveReportComponent_div_24_ng_template_22_Template, 13, 0, "ng-template", 33)(23, PreventiveReportComponent_div_24_ng_template_23_Template, 14, 9, "ng-template", 34)(24, PreventiveReportComponent_div_24_ng_template_24_Template, 3, 0, "ng-template", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.reportData.laboratoryName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getMonthName(ctx_r1.reportData.month), " ", ctx_r1.reportData.year);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.reportData.campusName || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.reportData.totalRecords || 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.reportData.records)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(10, _c018))("tableStyle", \u0275\u0275pureFunction0(11, _c27));
  }
}
function PreventiveReportComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, 'Select filters and click "Generate Report" to view data.');
    \u0275\u0275elementEnd()();
  }
}
var PreventiveReportComponent = class _PreventiveReportComponent {
  reportService;
  http;
  reportType = "daily";
  selectedDate = /* @__PURE__ */ new Date();
  selectedMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
  selectedYear = (/* @__PURE__ */ new Date()).getFullYear();
  laboratoryId = "";
  reportData = null;
  isLoading = false;
  errorMessage = "";
  laboratories = [];
  reportTypes = [
    { label: "Daily Report", value: "daily" },
    { label: "Monthly Report", value: "monthly" }
  ];
  months = [
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "August", value: 8 },
    { label: "September", value: 9 },
    { label: "October", value: 10 },
    { label: "November", value: 11 },
    { label: "December", value: 12 }
  ];
  years = [];
  constructor(reportService, http) {
    this.reportService = reportService;
    this.http = http;
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    for (let i = 2020; i <= currentYear + 5; i++) {
      this.years.push(i);
    }
  }
  ngOnInit() {
    this.loadLaboratories();
  }
  loadLaboratories() {
    const apiUrl = `${environment.apiUrl}/laboratories`;
    this.http.get(apiUrl).subscribe({
      next: (data) => {
        this.laboratories = data;
        console.log("\u2705 Laboratories loaded:", data);
      },
      error: (error) => {
        console.error("\u274C Error loading laboratories:", error);
      }
    });
  }
  onReportTypeChange() {
    this.reportData = null;
    this.errorMessage = "";
  }
  isFormValid() {
    return this.laboratoryId.trim().length > 0;
  }
  generateReport() {
    this.isLoading = true;
    this.errorMessage = "";
    this.reportData = null;
    if (this.reportType === "daily") {
      const dateStr = this.formatDateToString(this.selectedDate);
      this.reportService.getDailyPreventiveReport(dateStr, this.laboratoryId).subscribe({
        next: (data) => {
          this.reportData = data;
          this.isLoading = false;
          console.log("\u2705 Daily Preventive Report loaded:", data);
        },
        error: (error) => {
          this.errorMessage = error.error?.message || "Failed to generate daily report";
          this.isLoading = false;
          console.error("\u274C Error loading daily report:", error);
        }
      });
    } else {
      this.reportService.getMonthlyPreventiveReport(this.selectedMonth, this.selectedYear, this.laboratoryId).subscribe({
        next: (data) => {
          this.reportData = data;
          this.isLoading = false;
          console.log("\u2705 Monthly Preventive Report loaded:", data);
        },
        error: (error) => {
          this.errorMessage = error.error?.message || "Failed to generate monthly report";
          this.isLoading = false;
          console.error("\u274C Error loading monthly report:", error);
        }
      });
    }
  }
  formatDateToString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  formatDate(date) {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  getMonthName(month) {
    const monthObj = this.months.find((m) => m.value === month);
    return monthObj ? monthObj.label : "Unknown";
  }
  exportCSV() {
    if (!this.reportData || !this.reportData.records) {
      console.warn("No data to export");
      return;
    }
    let csv = "";
    let filename = "";
    if (this.reportType === "daily") {
      csv = "Machine/Equipment,Action Taken,Observation\n";
      csv += this.reportData.records.map((r) => `"${r.machineEquipmentInstrument}","${r.actionTaken}","${r.observation}"`).join("\n");
      filename = `preventive-daily-${this.formatDateToString(this.selectedDate)}.csv`;
    } else {
      csv = "Date,Equipment,Serial Number,Observations,Action Taken,Remarks\n";
      csv += this.reportData.records.map((r) => {
        const date = new Date(r.date).toISOString().split("T")[0];
        return `"${date}","${r.machineEquipmentInstrument}","${r.serialNumber}","${r.observations}","${r.actionTaken}","${r.remarks}"`;
      }).join("\n");
      filename = `preventive-monthly-${this.selectedYear}-${this.selectedMonth}.csv`;
    }
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function PreventiveReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreventiveReportComponent)(\u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreventiveReportComponent, selectors: [["app-preventive-report"]], decls: 26, vars: 15, consts: [["start", ""], ["end", ""], [1, "card"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-2xl", "font-bold", "mb-1"], [1, "text-muted-color"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-4", "mb-4", "p-4", "bg-surface-50", "dark:bg-surface-800", "rounded"], [1, "flex", "flex-col", "gap-2"], ["for", "reportType", 1, "font-semibold"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Select report type", 3, "ngModelChange", "onChange", "ngModel", "options"], ["class", "flex flex-col gap-2", 4, "ngIf"], ["for", "laboratoryId", 1, "font-semibold"], ["optionLabel", "laboratoryName", "optionValue", "laboratoryId", "placeholder", "Select laboratory", 3, "ngModelChange", "ngModel", "options", "filter"], [1, "flex", "items-end"], ["label", "Generate Report", "icon", "pi pi-chart-bar", 3, "onClick", "disabled", "loading"], ["severity", "error", "styleClass", "mb-4 w-full", 3, "text", 4, "ngIf"], ["class", "flex justify-center items-center py-8", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], ["class", "text-center py-8 text-muted-color", 4, "ngIf"], ["for", "selectedDate", 1, "font-semibold"], ["inputId", "selectedDate", "placeholder", "Select date", "dateFormat", "yy-mm-dd", 3, "ngModelChange", "ngModel"], ["for", "selectedMonth", 1, "font-semibold"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Select month", 3, "ngModelChange", "ngModel", "options"], ["for", "selectedYear", 1, "font-semibold"], ["placeholder", "Select year", 3, "ngModelChange", "ngModel", "options"], ["severity", "error", "styleClass", "mb-4 w-full", 3, "text"], [1, "flex", "justify-center", "items-center", "py-8"], [1, "mt-4"], [1, "mb-4", "p-4", "bg-surface-100", "dark:bg-surface-700", "rounded"], [1, "text-xl", "font-bold", "mb-2"], [1, "mt-2"], ["styleClass", "mb-2"], [3, "value", "rows", "paginator", "rowsPerPageOptions", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "font-semibold"], ["label", "Export CSV", "icon", "pi pi-upload", "size", "small", 3, "onClick"], [2, "width", "30%"], [2, "width", "35%"], ["colspan", "3", 1, "text-center", "py-4"], ["colspan", "6", 1, "text-center", "py-4"], [1, "text-center", "py-8", "text-muted-color"], [1, "pi", "pi-info-circle", "text-4xl", "mb-3"]], template: function PreventiveReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h2", 4);
      \u0275\u0275text(4, "Preventive Maintenance Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "Generate daily or monthly preventive maintenance reports by laboratory.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "label", 8);
      \u0275\u0275text(10, "Report Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p-select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function PreventiveReportComponent_Template_p_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.reportType, $event) || (ctx.reportType = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function PreventiveReportComponent_Template_p_select_onChange_11_listener() {
        return ctx.onReportTypeChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, PreventiveReportComponent_div_12_Template, 4, 1, "div", 10)(13, PreventiveReportComponent_div_13_Template, 4, 2, "div", 10)(14, PreventiveReportComponent_div_14_Template, 4, 2, "div", 10);
      \u0275\u0275elementStart(15, "div", 7)(16, "label", 11);
      \u0275\u0275text(17, "Laboratory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function PreventiveReportComponent_Template_p_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.laboratoryId, $event) || (ctx.laboratoryId = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 13)(20, "p-button", 14);
      \u0275\u0275listener("onClick", function PreventiveReportComponent_Template_p_button_onClick_20_listener() {
        return ctx.generateReport();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(21, PreventiveReportComponent_p_message_21_Template, 1, 1, "p-message", 15)(22, PreventiveReportComponent_div_22_Template, 2, 0, "div", 16)(23, PreventiveReportComponent_div_23_Template, 30, 12, "div", 17)(24, PreventiveReportComponent_div_24_Template, 25, 12, "div", 17)(25, PreventiveReportComponent_div_25_Template, 4, 0, "div", 18);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.reportType);
      \u0275\u0275property("options", ctx.reportTypes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportType === "daily");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportType === "monthly");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportType === "monthly");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.laboratoryId);
      \u0275\u0275property("options", ctx.laboratories)("filter", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.isFormValid() || ctx.isLoading)("loading", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportData && ctx.reportType === "daily" && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportData && ctx.reportType === "monthly" && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.reportData && !ctx.isLoading && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, ToolbarModule, Toolbar, PrimeTemplate, ButtonModule, Button, DatePickerModule, DatePicker, TableModule, Table, TabsModule, TagModule, SelectModule, Select, InputTextModule, ProgressSpinnerModule, ProgressSpinner, MessageModule, Message, CardModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreventiveReportComponent, [{
    type: Component,
    args: [{
      selector: "app-preventive-report",
      standalone: true,
      imports: [CommonModule, FormsModule, ToolbarModule, ButtonModule, DatePickerModule, TableModule, TabsModule, TagModule, SelectModule, InputTextModule, ProgressSpinnerModule, MessageModule, CardModule],
      template: `
        <div class="card">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h2 class="text-2xl font-bold mb-1">Preventive Maintenance Report</h2>
                    <p class="text-muted-color">Generate daily or monthly preventive maintenance reports by laboratory.</p>
                </div>
            </div>

            <!-- Filters Section -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 bg-surface-50 dark:bg-surface-800 rounded">
                <div class="flex flex-col gap-2">
                    <label for="reportType" class="font-semibold">Report Type</label>
                    <p-select [(ngModel)]="reportType" [options]="reportTypes" optionLabel="label" optionValue="value" placeholder="Select report type" (onChange)="onReportTypeChange()" />
                </div>

                <div class="flex flex-col gap-2" *ngIf="reportType === 'daily'">
                    <label for="selectedDate" class="font-semibold">Date</label>
                    <p-datepicker [(ngModel)]="selectedDate" inputId="selectedDate" placeholder="Select date" dateFormat="yy-mm-dd" />
                </div>

                <div class="flex flex-col gap-2" *ngIf="reportType === 'monthly'">
                    <label for="selectedMonth" class="font-semibold">Month</label>
                    <p-select [(ngModel)]="selectedMonth" [options]="months" optionLabel="label" optionValue="value" placeholder="Select month" />
                </div>

                <div class="flex flex-col gap-2" *ngIf="reportType === 'monthly'">
                    <label for="selectedYear" class="font-semibold">Year</label>
                    <p-select [(ngModel)]="selectedYear" [options]="years" placeholder="Select year" />
                </div>

                <div class="flex flex-col gap-2">
                    <label for="laboratoryId" class="font-semibold">Laboratory</label>
                    <p-select [(ngModel)]="laboratoryId" [options]="laboratories" optionLabel="laboratoryName" optionValue="laboratoryId" placeholder="Select laboratory" [filter]="true" />
                </div>

                <div class="flex items-end">
                    <p-button label="Generate Report" icon="pi pi-chart-bar" (onClick)="generateReport()" [disabled]="!isFormValid() || isLoading" [loading]="isLoading" />
                </div>
            </div>

            <!-- Error Message -->
            <p-message *ngIf="errorMessage" severity="error" [text]="errorMessage" styleClass="mb-4 w-full" />

            <!-- Loading Spinner -->
            <div *ngIf="isLoading" class="flex justify-center items-center py-8">
                <p-progressSpinner />
            </div>

            <!-- Report Results - Daily -->
            <div *ngIf="reportData && reportType === 'daily' && !isLoading" class="mt-4">
                <div class="mb-4 p-4 bg-surface-100 dark:bg-surface-700 rounded">
                    <h3 class="text-xl font-bold mb-2">{{ reportData.laboratoryName }}</h3>
                    <p><strong>Date:</strong> {{ formatDate(reportData.date) }}</p>
                    <p><strong>Performed By:</strong> {{ reportData.performedBy || 'N/A' }}</p>
                    <p><strong>Assisted By:</strong> {{ reportData.assistedBy || 'N/A' }}</p>
                    <p class="mt-2"><strong>Recommendations:</strong></p>
                    <p class="text-muted-color">{{ reportData.recommendations || 'No recommendations provided' }}</p>
                </div>

                <p-toolbar styleClass="mb-2">
                    <ng-template #start>
                        <span class="font-semibold">Daily Report Details</span>
                    </ng-template>
                    <ng-template #end>
                        <p-button label="Export CSV" icon="pi pi-upload" (onClick)="exportCSV()" size="small" />
                    </ng-template>
                </p-toolbar>

                <p-table [value]="reportData.records" [rows]="10" [paginator]="true" [rowsPerPageOptions]="[10, 20, 30]" [tableStyle]="{ 'min-width': '60rem' }">
                    <ng-template pTemplate="header">
                        <tr>
                            <th style="width: 30%">Machine/Equipment/Instrument</th>
                            <th style="width: 35%">Action Taken</th>
                            <th style="width: 35%">Observation</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-row>
                        <tr>
                            <td>{{ row.machineEquipmentInstrument || 'N/A' }}</td>
                            <td>{{ row.actionTaken || 'N/A' }}</td>
                            <td>{{ row.observation || 'N/A' }}</td>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="emptymessage">
                        <tr>
                            <td colspan="3" class="text-center py-4">No records found.</td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>

            <!-- Report Results - Monthly -->
            <div *ngIf="reportData && reportType === 'monthly' && !isLoading" class="mt-4">
                <div class="mb-4 p-4 bg-surface-100 dark:bg-surface-700 rounded">
                    <h3 class="text-xl font-bold mb-2">{{ reportData.laboratoryName }}</h3>
                    <p><strong>Period:</strong> {{ getMonthName(reportData.month) }} {{ reportData.year }}</p>
                    <p><strong>Campus:</strong> {{ reportData.campusName || 'N/A' }}</p>
                    <p><strong>Total Records:</strong> {{ reportData.totalRecords || 0 }}</p>
                </div>

                <p-toolbar styleClass="mb-2">
                    <ng-template #start>
                        <span class="font-semibold">Monthly Report Details</span>
                    </ng-template>
                    <ng-template #end>
                        <p-button label="Export CSV" icon="pi pi-upload" (onClick)="exportCSV()" size="small" />
                    </ng-template>
                </p-toolbar>

                <p-table [value]="reportData.records" [rows]="10" [paginator]="true" [rowsPerPageOptions]="[10, 20, 30]" [tableStyle]="{ 'min-width': '80rem' }">
                    <ng-template pTemplate="header">
                        <tr>
                            <th>Date</th>
                            <th>Equipment</th>
                            <th>Serial Number</th>
                            <th>Observations</th>
                            <th>Action Taken</th>
                            <th>Remarks</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-row>
                        <tr>
                            <td>{{ row.date | date: 'mediumDate' }}</td>
                            <td>{{ row.machineEquipmentInstrument || 'N/A' }}</td>
                            <td>{{ row.serialNumber || 'N/A' }}</td>
                            <td>{{ row.observations || 'N/A' }}</td>
                            <td>{{ row.actionTaken || 'N/A' }}</td>
                            <td>{{ row.remarks || 'N/A' }}</td>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="emptymessage">
                        <tr>
                            <td colspan="6" class="text-center py-4">No records found.</td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>

            <!-- No Data Message -->
            <div *ngIf="!reportData && !isLoading && !errorMessage" class="text-center py-8 text-muted-color">
                <i class="pi pi-info-circle text-4xl mb-3"></i>
                <p>Select filters and click "Generate Report" to view data.</p>
            </div>
        </div>
    `
    }]
  }], () => [{ type: ReportService }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreventiveReportComponent, { className: "PreventiveReportComponent", filePath: "src/app/pages/reports/preventive-report.ts", lineNumber: 190 });
})();

// src/app/pages/reports/corrective-report.ts
var _c019 = () => [10, 20, 30];
var _c117 = () => ({ "min-width": "90rem" });
var _c28 = () => ({ "min-width": "100rem" });
function CorrectiveReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 19);
    \u0275\u0275text(2, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-datepicker", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CorrectiveReportComponent_div_12_Template_p_datepicker_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedDate, $event) || (ctx_r1.selectedDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedDate);
  }
}
function CorrectiveReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 21);
    \u0275\u0275text(2, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function CorrectiveReportComponent_div_13_Template_p_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedMonth, $event) || (ctx_r1.selectedMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedMonth);
    \u0275\u0275property("options", ctx_r1.months);
  }
}
function CorrectiveReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 23);
    \u0275\u0275text(2, "Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function CorrectiveReportComponent_div_14_Template_p_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedYear, $event) || (ctx_r1.selectedYear = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedYear);
    \u0275\u0275property("options", ctx_r1.years);
  }
}
function CorrectiveReportComponent_p_message_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 25);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r1.errorMessage);
  }
}
function CorrectiveReportComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "p-progressSpinner");
    \u0275\u0275elementEnd();
  }
}
function CorrectiveReportComponent_div_23_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Daily Report Details");
    \u0275\u0275elementEnd();
  }
}
function CorrectiveReportComponent_div_23_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 36);
    \u0275\u0275listener("onClick", function CorrectiveReportComponent_div_23_ng_template_15_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.exportCSV());
    });
    \u0275\u0275elementEnd();
  }
}
function CorrectiveReportComponent_div_23_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Equipment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Serial No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Laboratory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Problem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Action Taken");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Parts Replaced");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Completed By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Downtime");
    \u0275\u0275elementEnd()();
  }
}
function CorrectiveReportComponent_div_23_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275element(19, "p-tag", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 11, row_r6.date, "shortDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r6.equipmentName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.serialNumber || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.laboratoryLocation || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.problemReported || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.actionTaken || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.partsReplaced || "None");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.completedBy || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r6.priorityLevel)("severity", ctx_r1.getPrioritySeverity(row_r6.priorityLevel));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.downtime || "N/A");
  }
}
function CorrectiveReportComponent_div_23_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2, "No records found.");
    \u0275\u0275elementEnd()();
  }
}
function CorrectiveReportComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "h3", 29);
    \u0275\u0275text(3, "Daily Corrective Maintenance Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p")(5, "strong");
    \u0275\u0275text(6, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10, "Total Records:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p-toolbar", 30);
    \u0275\u0275template(13, CorrectiveReportComponent_div_23_ng_template_13_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, CorrectiveReportComponent_div_23_ng_template_15_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p-table", 31);
    \u0275\u0275template(18, CorrectiveReportComponent_div_23_ng_template_18_Template, 21, 0, "ng-template", 32)(19, CorrectiveReportComponent_div_23_ng_template_19_Template, 22, 14, "ng-template", 33)(20, CorrectiveReportComponent_div_23_ng_template_20_Template, 3, 0, "ng-template", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(ctx_r1.selectedDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.reportData.records == null ? null : ctx_r1.reportData.records.length) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.reportData.records)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(7, _c019))("tableStyle", \u0275\u0275pureFunction0(8, _c117));
  }
}
function CorrectiveReportComponent_div_24_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "Generated:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, ctx_r1.reportData.generatedDate, "medium"));
  }
}
function CorrectiveReportComponent_div_24_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "h4", 45);
    \u0275\u0275text(3, "Total Repairs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 47)(7, "h4", 48);
    \u0275\u0275text(8, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 49);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 50)(12, "h4", 51);
    \u0275\u0275text(13, "Avg Downtime");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 52);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 53)(17, "h4", 54);
    \u0275\u0275text(18, "Completion Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 55);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.reportData.summary.totalRepairs);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.reportData.summary.completedRepairs);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.reportData.summary.averageDowntimeHours, "h");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.getCompletionRate(), "%");
  }
}
function CorrectiveReportComponent_div_24_div_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "p", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.priorityLevel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.count);
  }
}
function CorrectiveReportComponent_div_24_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "h4", 57);
    \u0275\u0275text(2, "Breakdown by Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58);
    \u0275\u0275template(4, CorrectiveReportComponent_div_24_div_21_div_4_Template, 5, 2, "div", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.reportData.summary.byPriority);
  }
}
function CorrectiveReportComponent_div_24_div_22_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "p", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.laboratoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.count);
  }
}
function CorrectiveReportComponent_div_24_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "h4", 57);
    \u0275\u0275text(2, "Breakdown by Laboratory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58);
    \u0275\u0275template(4, CorrectiveReportComponent_div_24_div_22_div_4_Template, 5, 2, "div", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.reportData.summary.byLaboratory);
  }
}
function CorrectiveReportComponent_div_24_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Detailed Records");
    \u0275\u0275elementEnd();
  }
}
function CorrectiveReportComponent_div_24_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 36);
    \u0275\u0275listener("onClick", function CorrectiveReportComponent_div_24_ng_template_26_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.exportCSV());
    });
    \u0275\u0275elementEnd();
  }
}
function CorrectiveReportComponent_div_24_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Equipment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Serial No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Laboratory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Problem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Action Taken");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Parts Replaced");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Completed By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Priority");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Downtime");
    \u0275\u0275elementEnd()();
  }
}
function CorrectiveReportComponent_div_24_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275element(21, "p-tag", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 12, row_r10.date, "shortDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r10.equipmentName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.serialNumber || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.laboratoryLocation || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.problemReported || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.actionTaken || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.partsReplaced || "None");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.remarks || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.completedBy || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r10.priorityLevel)("severity", ctx_r1.getPrioritySeverity(row_r10.priorityLevel));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.downtime || "N/A");
  }
}
function CorrectiveReportComponent_div_24_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 63);
    \u0275\u0275text(2, "No records found.");
    \u0275\u0275elementEnd()();
  }
}
function CorrectiveReportComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "h3", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39)(5, "div")(6, "p")(7, "strong");
    \u0275\u0275text(8, "Period:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p")(11, "strong");
    \u0275\u0275text(12, "Campus:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, CorrectiveReportComponent_div_24_p_14_Template, 5, 4, "p", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "p")(17, "strong");
    \u0275\u0275text(18, "Total Records:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(20, CorrectiveReportComponent_div_24_div_20_Template, 21, 4, "div", 41)(21, CorrectiveReportComponent_div_24_div_21_Template, 5, 1, "div", 42)(22, CorrectiveReportComponent_div_24_div_22_Template, 5, 1, "div", 42);
    \u0275\u0275elementStart(23, "p-toolbar", 30);
    \u0275\u0275template(24, CorrectiveReportComponent_div_24_ng_template_24_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(26, CorrectiveReportComponent_div_24_ng_template_26_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p-table", 31);
    \u0275\u0275template(29, CorrectiveReportComponent_div_24_ng_template_29_Template, 23, 0, "ng-template", 32)(30, CorrectiveReportComponent_div_24_ng_template_30_Template, 24, 15, "ng-template", 33)(31, CorrectiveReportComponent_div_24_ng_template_31_Template, 3, 0, "ng-template", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.reportData.reportTitle || "Monthly Corrective Maintenance Report");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getMonthName(ctx_r1.reportData.reportMonth || ctx_r1.selectedMonth), " ", ctx_r1.reportData.reportYear || ctx_r1.selectedYear);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.reportData.campusName || "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reportData.generatedDate);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.reportData.totalRecords || (ctx_r1.reportData.records == null ? null : ctx_r1.reportData.records.length) || 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reportData.summary);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reportData.summary == null ? null : ctx_r1.reportData.summary.byPriority);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.reportData.summary == null ? null : ctx_r1.reportData.summary.byLaboratory);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.reportData.records)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(14, _c019))("tableStyle", \u0275\u0275pureFunction0(15, _c28));
  }
}
function CorrectiveReportComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, 'Select filters and click "Generate Report" to view data.');
    \u0275\u0275elementEnd()();
  }
}
var CorrectiveReportComponent = class _CorrectiveReportComponent {
  reportService;
  http;
  reportType = "daily";
  selectedDate = /* @__PURE__ */ new Date();
  selectedMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
  selectedYear = (/* @__PURE__ */ new Date()).getFullYear();
  priorityLevelId = "";
  reportData = null;
  isLoading = false;
  errorMessage = "";
  priorityLevels = [];
  reportTypes = [
    { label: "Daily Report", value: "daily" },
    { label: "Monthly Report", value: "monthly" }
  ];
  months = [
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "August", value: 8 },
    { label: "September", value: 9 },
    { label: "October", value: 10 },
    { label: "November", value: 11 },
    { label: "December", value: 12 }
  ];
  years = [];
  constructor(reportService, http) {
    this.reportService = reportService;
    this.http = http;
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    for (let i = 2020; i <= currentYear + 5; i++) {
      this.years.push(i);
    }
  }
  ngOnInit() {
    this.loadPriorityLevels();
  }
  loadPriorityLevels() {
    const apiUrl = `${environment.apiUrl}/maintenance/priority-levels`;
    this.http.get(apiUrl).subscribe({
      next: (data) => {
        this.priorityLevels = data;
        console.log("\u2705 Priority levels loaded:", data);
      },
      error: (error) => {
        console.error("\u274C Error loading priority levels:", error);
      }
    });
  }
  onReportTypeChange() {
    this.reportData = null;
    this.errorMessage = "";
  }
  generateReport() {
    this.isLoading = true;
    this.errorMessage = "";
    this.reportData = null;
    if (this.reportType === "daily") {
      const dateStr = this.formatDateToString(this.selectedDate);
      this.reportService.getDailyCorrectiveReport(dateStr, this.priorityLevelId || void 0).subscribe({
        next: (data) => {
          this.reportData = data;
          this.isLoading = false;
          console.log("\u2705 Daily Corrective Report loaded:", data);
        },
        error: (error) => {
          this.errorMessage = error.error?.message || "Failed to generate daily report";
          this.isLoading = false;
          console.error("\u274C Error loading daily report:", error);
        }
      });
    } else {
      this.reportService.getMonthlyCorrectiveReport(this.selectedMonth, this.selectedYear, this.priorityLevelId || void 0).subscribe({
        next: (data) => {
          this.reportData = data;
          this.isLoading = false;
          console.log("\u2705 Monthly Corrective Report loaded:", data);
        },
        error: (error) => {
          this.errorMessage = error.error?.message || "Failed to generate monthly report";
          this.isLoading = false;
          console.error("\u274C Error loading monthly report:", error);
        }
      });
    }
  }
  formatDateToString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  formatDate(date) {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  getMonthName(month) {
    const monthObj = this.months.find((m) => m.value === month);
    return monthObj ? monthObj.label : "Unknown";
  }
  getCompletionRate() {
    if (!this.reportData?.summary)
      return 0;
    const { totalRepairs, completedRepairs } = this.reportData.summary;
    if (totalRepairs === 0)
      return 0;
    return Math.round(completedRepairs / totalRepairs * 100);
  }
  getPrioritySeverity(priority) {
    const lowerPriority = priority?.toLowerCase() || "";
    if (lowerPriority.includes("high") || lowerPriority.includes("critical") || lowerPriority.includes("urgent")) {
      return "danger";
    } else if (lowerPriority.includes("medium") || lowerPriority.includes("moderate")) {
      return "warn";
    } else if (lowerPriority.includes("low")) {
      return "success";
    }
    return "secondary";
  }
  exportCSV() {
    if (!this.reportData || !this.reportData.records) {
      console.warn("No data to export");
      return;
    }
    let csv = "";
    let filename = "";
    if (this.reportType === "daily") {
      csv = "Date,Equipment,Serial No,Laboratory,Problem,Action Taken,Parts Replaced,Completed By,Priority,Downtime\n";
      csv += this.reportData.records.map((r) => {
        const date = new Date(r.date).toISOString().split("T")[0];
        return `"${date}","${r.equipmentName}","${r.serialNumber}","${r.laboratoryLocation}","${r.problemReported}","${r.actionTaken}","${r.partsReplaced}","${r.completedBy}","${r.priorityLevel}","${r.downtime}"`;
      }).join("\n");
      filename = `corrective-daily-${this.formatDateToString(this.selectedDate)}.csv`;
    } else {
      csv = "Date,Equipment,Serial No,Laboratory,Problem,Action Taken,Parts Replaced,Remarks,Completed By,Requested By,Priority,Downtime\n";
      csv += this.reportData.records.map((r) => {
        const date = new Date(r.date).toISOString().split("T")[0];
        return `"${date}","${r.equipmentName}","${r.serialNumber}","${r.laboratoryLocation}","${r.problemReported}","${r.actionTaken}","${r.partsReplaced}","${r.remarks}","${r.completedBy}","${r.requestedBy}","${r.priorityLevel}","${r.downtime}"`;
      }).join("\n");
      filename = `corrective-monthly-${this.selectedYear}-${this.selectedMonth}.csv`;
    }
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function CorrectiveReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CorrectiveReportComponent)(\u0275\u0275directiveInject(ReportService), \u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CorrectiveReportComponent, selectors: [["app-corrective-report"]], decls: 26, vars: 16, consts: [["start", ""], ["end", ""], [1, "card"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-2xl", "font-bold", "mb-1"], [1, "text-muted-color"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-4", "mb-4", "p-4", "bg-surface-50", "dark:bg-surface-800", "rounded"], [1, "flex", "flex-col", "gap-2"], ["for", "reportType", 1, "font-semibold"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Select report type", 3, "ngModelChange", "onChange", "ngModel", "options"], ["class", "flex flex-col gap-2", 4, "ngIf"], ["for", "priorityLevelId", 1, "font-semibold"], ["optionLabel", "priorityLevelName", "optionValue", "priorityLevelId", "placeholder", "All Priorities", 3, "ngModelChange", "ngModel", "options", "filter", "showClear"], [1, "flex", "items-end"], ["label", "Generate Report", "icon", "pi pi-chart-bar", 3, "onClick", "disabled", "loading"], ["severity", "error", "styleClass", "mb-4 w-full", 3, "text", 4, "ngIf"], ["class", "flex justify-center items-center py-8", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], ["class", "text-center py-8 text-muted-color", 4, "ngIf"], ["for", "selectedDate", 1, "font-semibold"], ["inputId", "selectedDate", "placeholder", "Select date", "dateFormat", "yy-mm-dd", 3, "ngModelChange", "ngModel"], ["for", "selectedMonth", 1, "font-semibold"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Select month", 3, "ngModelChange", "ngModel", "options"], ["for", "selectedYear", 1, "font-semibold"], ["placeholder", "Select year", 3, "ngModelChange", "ngModel", "options"], ["severity", "error", "styleClass", "mb-4 w-full", 3, "text"], [1, "flex", "justify-center", "items-center", "py-8"], [1, "mt-4"], [1, "mb-4", "p-4", "bg-surface-100", "dark:bg-surface-700", "rounded"], [1, "text-xl", "font-bold", "mb-2"], ["styleClass", "mb-2"], [3, "value", "rows", "paginator", "rowsPerPageOptions", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "font-semibold"], ["label", "Export CSV", "icon", "pi pi-upload", "size", "small", 3, "onClick"], [3, "value", "severity"], ["colspan", "10", 1, "text-center", "py-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-2"], [4, "ngIf"], ["class", "grid grid-cols-1 md:grid-cols-4 gap-4 mb-4", 4, "ngIf"], ["class", "mb-4", 4, "ngIf"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-4", "mb-4"], [1, "p-4", "bg-blue-50", "dark:bg-blue-900", "rounded"], [1, "text-sm", "font-semibold", "text-blue-700", "dark:text-blue-300"], [1, "text-2xl", "font-bold", "text-blue-900", "dark:text-blue-100"], [1, "p-4", "bg-green-50", "dark:bg-green-900", "rounded"], [1, "text-sm", "font-semibold", "text-green-700", "dark:text-green-300"], [1, "text-2xl", "font-bold", "text-green-900", "dark:text-green-100"], [1, "p-4", "bg-orange-50", "dark:bg-orange-900", "rounded"], [1, "text-sm", "font-semibold", "text-orange-700", "dark:text-orange-300"], [1, "text-2xl", "font-bold", "text-orange-900", "dark:text-orange-100"], [1, "p-4", "bg-purple-50", "dark:bg-purple-900", "rounded"], [1, "text-sm", "font-semibold", "text-purple-700", "dark:text-purple-300"], [1, "text-2xl", "font-bold", "text-purple-900", "dark:text-purple-100"], [1, "mb-4"], [1, "font-semibold", "mb-2"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-2"], ["class", "p-3 bg-surface-50 dark:bg-surface-800 rounded", 4, "ngFor", "ngForOf"], [1, "p-3", "bg-surface-50", "dark:bg-surface-800", "rounded"], [1, "text-sm", "text-muted-color"], [1, "text-lg", "font-bold"], ["colspan", "11", 1, "text-center", "py-4"], [1, "text-center", "py-8", "text-muted-color"], [1, "pi", "pi-info-circle", "text-4xl", "mb-3"]], template: function CorrectiveReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h2", 4);
      \u0275\u0275text(4, "Corrective Maintenance Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "Generate daily or monthly corrective maintenance reports with priority filtering.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "label", 8);
      \u0275\u0275text(10, "Report Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p-select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function CorrectiveReportComponent_Template_p_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.reportType, $event) || (ctx.reportType = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function CorrectiveReportComponent_Template_p_select_onChange_11_listener() {
        return ctx.onReportTypeChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, CorrectiveReportComponent_div_12_Template, 4, 1, "div", 10)(13, CorrectiveReportComponent_div_13_Template, 4, 2, "div", 10)(14, CorrectiveReportComponent_div_14_Template, 4, 2, "div", 10);
      \u0275\u0275elementStart(15, "div", 7)(16, "label", 11);
      \u0275\u0275text(17, "Priority Level (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function CorrectiveReportComponent_Template_p_select_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.priorityLevelId, $event) || (ctx.priorityLevelId = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 13)(20, "p-button", 14);
      \u0275\u0275listener("onClick", function CorrectiveReportComponent_Template_p_button_onClick_20_listener() {
        return ctx.generateReport();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(21, CorrectiveReportComponent_p_message_21_Template, 1, 1, "p-message", 15)(22, CorrectiveReportComponent_div_22_Template, 2, 0, "div", 16)(23, CorrectiveReportComponent_div_23_Template, 21, 9, "div", 17)(24, CorrectiveReportComponent_div_24_Template, 32, 16, "div", 17)(25, CorrectiveReportComponent_div_25_Template, 4, 0, "div", 18);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.reportType);
      \u0275\u0275property("options", ctx.reportTypes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportType === "daily");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportType === "monthly");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportType === "monthly");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.priorityLevelId);
      \u0275\u0275property("options", ctx.priorityLevels)("filter", true)("showClear", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading)("loading", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportData && ctx.reportType === "daily" && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportData && ctx.reportType === "monthly" && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.reportData && !ctx.isLoading && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, ToolbarModule, Toolbar, PrimeTemplate, ButtonModule, Button, DatePickerModule, DatePicker, TableModule, Table, TabsModule, TagModule, Tag, SelectModule, Select, InputTextModule, ProgressSpinnerModule, ProgressSpinner, MessageModule, Message, CardModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CorrectiveReportComponent, [{
    type: Component,
    args: [{
      selector: "app-corrective-report",
      standalone: true,
      imports: [CommonModule, FormsModule, ToolbarModule, ButtonModule, DatePickerModule, TableModule, TabsModule, TagModule, SelectModule, InputTextModule, ProgressSpinnerModule, MessageModule, CardModule],
      template: `
        <div class="card">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h2 class="text-2xl font-bold mb-1">Corrective Maintenance Report</h2>
                    <p class="text-muted-color">Generate daily or monthly corrective maintenance reports with priority filtering.</p>
                </div>
            </div>

            <!-- Filters Section -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 bg-surface-50 dark:bg-surface-800 rounded">
                <div class="flex flex-col gap-2">
                    <label for="reportType" class="font-semibold">Report Type</label>
                    <p-select [(ngModel)]="reportType" [options]="reportTypes" optionLabel="label" optionValue="value" placeholder="Select report type" (onChange)="onReportTypeChange()" />
                </div>

                <div class="flex flex-col gap-2" *ngIf="reportType === 'daily'">
                    <label for="selectedDate" class="font-semibold">Date</label>
                    <p-datepicker [(ngModel)]="selectedDate" inputId="selectedDate" placeholder="Select date" dateFormat="yy-mm-dd" />
                </div>

                <div class="flex flex-col gap-2" *ngIf="reportType === 'monthly'">
                    <label for="selectedMonth" class="font-semibold">Month</label>
                    <p-select [(ngModel)]="selectedMonth" [options]="months" optionLabel="label" optionValue="value" placeholder="Select month" />
                </div>

                <div class="flex flex-col gap-2" *ngIf="reportType === 'monthly'">
                    <label for="selectedYear" class="font-semibold">Year</label>
                    <p-select [(ngModel)]="selectedYear" [options]="years" placeholder="Select year" />
                </div>

                <div class="flex flex-col gap-2">
                    <label for="priorityLevelId" class="font-semibold">Priority Level (Optional)</label>
                    <p-select [(ngModel)]="priorityLevelId" [options]="priorityLevels" optionLabel="priorityLevelName" optionValue="priorityLevelId" placeholder="All Priorities" [filter]="true" [showClear]="true" />
                </div>

                <div class="flex items-end">
                    <p-button label="Generate Report" icon="pi pi-chart-bar" (onClick)="generateReport()" [disabled]="isLoading" [loading]="isLoading" />
                </div>
            </div>

            <!-- Error Message -->
            <p-message *ngIf="errorMessage" severity="error" [text]="errorMessage" styleClass="mb-4 w-full" />

            <!-- Loading Spinner -->
            <div *ngIf="isLoading" class="flex justify-center items-center py-8">
                <p-progressSpinner />
            </div>

            <!-- Report Results - Daily -->
            <div *ngIf="reportData && reportType === 'daily' && !isLoading" class="mt-4">
                <div class="mb-4 p-4 bg-surface-100 dark:bg-surface-700 rounded">
                    <h3 class="text-xl font-bold mb-2">Daily Corrective Maintenance Report</h3>
                    <p><strong>Date:</strong> {{ formatDate(selectedDate) }}</p>
                    <p><strong>Total Records:</strong> {{ reportData.records?.length || 0 }}</p>
                </div>

                <p-toolbar styleClass="mb-2">
                    <ng-template #start>
                        <span class="font-semibold">Daily Report Details</span>
                    </ng-template>
                    <ng-template #end>
                        <p-button label="Export CSV" icon="pi pi-upload" (onClick)="exportCSV()" size="small" />
                    </ng-template>
                </p-toolbar>

                <p-table [value]="reportData.records" [rows]="10" [paginator]="true" [rowsPerPageOptions]="[10, 20, 30]" [tableStyle]="{ 'min-width': '90rem' }">
                    <ng-template pTemplate="header">
                        <tr>
                            <th>Date</th>
                            <th>Equipment</th>
                            <th>Serial No.</th>
                            <th>Laboratory</th>
                            <th>Problem</th>
                            <th>Action Taken</th>
                            <th>Parts Replaced</th>
                            <th>Completed By</th>
                            <th>Priority</th>
                            <th>Downtime</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-row>
                        <tr>
                            <td>{{ row.date | date: 'shortDate' }}</td>
                            <td>{{ row.equipmentName || 'N/A' }}</td>
                            <td>{{ row.serialNumber || 'N/A' }}</td>
                            <td>{{ row.laboratoryLocation || 'N/A' }}</td>
                            <td>{{ row.problemReported || 'N/A' }}</td>
                            <td>{{ row.actionTaken || 'N/A' }}</td>
                            <td>{{ row.partsReplaced || 'None' }}</td>
                            <td>{{ row.completedBy || 'N/A' }}</td>
                            <td><p-tag [value]="row.priorityLevel" [severity]="getPrioritySeverity(row.priorityLevel)" /></td>
                            <td>{{ row.downtime || 'N/A' }}</td>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="emptymessage">
                        <tr>
                            <td colspan="10" class="text-center py-4">No records found.</td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>

            <!-- Report Results - Monthly -->
            <div *ngIf="reportData && reportType === 'monthly' && !isLoading" class="mt-4">
                <div class="mb-4 p-4 bg-surface-100 dark:bg-surface-700 rounded">
                    <h3 class="text-xl font-bold mb-2">{{ reportData.reportTitle || 'Monthly Corrective Maintenance Report' }}</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                            <p><strong>Period:</strong> {{ getMonthName(reportData.reportMonth || selectedMonth) }} {{ reportData.reportYear || selectedYear }}</p>
                            <p><strong>Campus:</strong> {{ reportData.campusName || 'N/A' }}</p>
                            <p *ngIf="reportData.generatedDate"><strong>Generated:</strong> {{ reportData.generatedDate | date: 'medium' }}</p>
                        </div>
                        <div>
                            <p><strong>Total Records:</strong> {{ reportData.totalRecords || reportData.records?.length || 0 }}</p>
                        </div>
                    </div>
                </div>

                <!-- Summary Section -->
                <div *ngIf="reportData.summary" class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div class="p-4 bg-blue-50 dark:bg-blue-900 rounded">
                        <h4 class="text-sm font-semibold text-blue-700 dark:text-blue-300">Total Repairs</h4>
                        <p class="text-2xl font-bold text-blue-900 dark:text-blue-100">{{ reportData.summary.totalRepairs }}</p>
                    </div>
                    <div class="p-4 bg-green-50 dark:bg-green-900 rounded">
                        <h4 class="text-sm font-semibold text-green-700 dark:text-green-300">Completed</h4>
                        <p class="text-2xl font-bold text-green-900 dark:text-green-100">{{ reportData.summary.completedRepairs }}</p>
                    </div>
                    <div class="p-4 bg-orange-50 dark:bg-orange-900 rounded">
                        <h4 class="text-sm font-semibold text-orange-700 dark:text-orange-300">Avg Downtime</h4>
                        <p class="text-2xl font-bold text-orange-900 dark:text-orange-100">{{ reportData.summary.averageDowntimeHours }}h</p>
                    </div>
                    <div class="p-4 bg-purple-50 dark:bg-purple-900 rounded">
                        <h4 class="text-sm font-semibold text-purple-700 dark:text-purple-300">Completion Rate</h4>
                        <p class="text-2xl font-bold text-purple-900 dark:text-purple-100">{{ getCompletionRate() }}%</p>
                    </div>
                </div>

                <!-- Priority Breakdown -->
                <div *ngIf="reportData.summary?.byPriority" class="mb-4">
                    <h4 class="font-semibold mb-2">Breakdown by Priority</h4>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div *ngFor="let item of reportData.summary.byPriority" class="p-3 bg-surface-50 dark:bg-surface-800 rounded">
                            <p class="text-sm text-muted-color">{{ item.priorityLevel }}</p>
                            <p class="text-lg font-bold">{{ item.count }}</p>
                        </div>
                    </div>
                </div>

                <!-- Laboratory Breakdown -->
                <div *ngIf="reportData.summary?.byLaboratory" class="mb-4">
                    <h4 class="font-semibold mb-2">Breakdown by Laboratory</h4>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                        <div *ngFor="let item of reportData.summary.byLaboratory" class="p-3 bg-surface-50 dark:bg-surface-800 rounded">
                            <p class="text-sm text-muted-color">{{ item.laboratoryName }}</p>
                            <p class="text-lg font-bold">{{ item.count }}</p>
                        </div>
                    </div>
                </div>

                <p-toolbar styleClass="mb-2">
                    <ng-template #start>
                        <span class="font-semibold">Detailed Records</span>
                    </ng-template>
                    <ng-template #end>
                        <p-button label="Export CSV" icon="pi pi-upload" (onClick)="exportCSV()" size="small" />
                    </ng-template>
                </p-toolbar>

                <p-table [value]="reportData.records" [rows]="10" [paginator]="true" [rowsPerPageOptions]="[10, 20, 30]" [tableStyle]="{ 'min-width': '100rem' }">
                    <ng-template pTemplate="header">
                        <tr>
                            <th>Date</th>
                            <th>Equipment</th>
                            <th>Serial No.</th>
                            <th>Laboratory</th>
                            <th>Problem</th>
                            <th>Action Taken</th>
                            <th>Parts Replaced</th>
                            <th>Remarks</th>
                            <th>Completed By</th>
                            <th>Priority</th>
                            <th>Downtime</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-row>
                        <tr>
                            <td>{{ row.date | date: 'shortDate' }}</td>
                            <td>{{ row.equipmentName || 'N/A' }}</td>
                            <td>{{ row.serialNumber || 'N/A' }}</td>
                            <td>{{ row.laboratoryLocation || 'N/A' }}</td>
                            <td>{{ row.problemReported || 'N/A' }}</td>
                            <td>{{ row.actionTaken || 'N/A' }}</td>
                            <td>{{ row.partsReplaced || 'None' }}</td>
                            <td>{{ row.remarks || 'N/A' }}</td>
                            <td>{{ row.completedBy || 'N/A' }}</td>
                            <td><p-tag [value]="row.priorityLevel" [severity]="getPrioritySeverity(row.priorityLevel)" /></td>
                            <td>{{ row.downtime || 'N/A' }}</td>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="emptymessage">
                        <tr>
                            <td colspan="11" class="text-center py-4">No records found.</td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>

            <!-- No Data Message -->
            <div *ngIf="!reportData && !isLoading && !errorMessage" class="text-center py-8 text-muted-color">
                <i class="pi pi-info-circle text-4xl mb-3"></i>
                <p>Select filters and click "Generate Report" to view data.</p>
            </div>
        </div>
    `
    }]
  }], () => [{ type: ReportService }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CorrectiveReportComponent, { className: "CorrectiveReportComponent", filePath: "src/app/pages/reports/corrective-report.ts", lineNumber: 277 });
})();

// src/app/pages/reports/calibration-report.ts
var _c020 = () => [10, 20, 30];
var _c118 = () => ({ "min-width": "80rem" });
var _c29 = () => ({ "min-width": "90rem" });
function CalibrationReportComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 17);
    \u0275\u0275text(2, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-datepicker", 18);
    \u0275\u0275twoWayListener("ngModelChange", function CalibrationReportComponent_div_12_Template_p_datepicker_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedDate, $event) || (ctx_r1.selectedDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedDate);
  }
}
function CalibrationReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 19);
    \u0275\u0275text(2, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CalibrationReportComponent_div_13_Template_p_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedMonth, $event) || (ctx_r1.selectedMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedMonth);
    \u0275\u0275property("options", ctx_r1.months);
  }
}
function CalibrationReportComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "label", 21);
    \u0275\u0275text(2, "Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function CalibrationReportComponent_div_14_Template_p_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedYear, $event) || (ctx_r1.selectedYear = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedYear);
    \u0275\u0275property("options", ctx_r1.years);
  }
}
function CalibrationReportComponent_p_message_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r1.errorMessage);
  }
}
function CalibrationReportComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "p-progressSpinner");
    \u0275\u0275elementEnd();
  }
}
function CalibrationReportComponent_div_19_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "Daily Report Details");
    \u0275\u0275elementEnd();
  }
}
function CalibrationReportComponent_div_19_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 34);
    \u0275\u0275listener("onClick", function CalibrationReportComponent_div_19_ng_template_15_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.exportCSV());
    });
    \u0275\u0275elementEnd();
  }
}
function CalibrationReportComponent_div_19_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Equipment Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Serial Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Calibration Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Result");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Performed By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Remarks");
    \u0275\u0275elementEnd()();
  }
}
function CalibrationReportComponent_div_19_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "p-tag", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 8, row_r6.date, "shortDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r6.equipmentName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.serialNumber || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.calibrationType || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r6.result)("severity", ctx_r1.getResultSeverity(row_r6.result));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.performedBy || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.remarks || "N/A");
  }
}
function CalibrationReportComponent_div_19_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2, "No records found.");
    \u0275\u0275elementEnd()();
  }
}
function CalibrationReportComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Daily Calibration Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p")(5, "strong");
    \u0275\u0275text(6, "Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10, "Total Records:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p-toolbar", 28);
    \u0275\u0275template(13, CalibrationReportComponent_div_19_ng_template_13_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, CalibrationReportComponent_div_19_ng_template_15_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p-table", 29);
    \u0275\u0275template(18, CalibrationReportComponent_div_19_ng_template_18_Template, 15, 0, "ng-template", 30)(19, CalibrationReportComponent_div_19_ng_template_19_Template, 16, 11, "ng-template", 31)(20, CalibrationReportComponent_div_19_ng_template_20_Template, 3, 0, "ng-template", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(ctx_r1.selectedDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.reportData.records == null ? null : ctx_r1.reportData.records.length) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.reportData.records)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(7, _c020))("tableStyle", \u0275\u0275pureFunction0(8, _c118));
  }
}
function CalibrationReportComponent_div_20_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "Monthly Report Details");
    \u0275\u0275elementEnd();
  }
}
function CalibrationReportComponent_div_20_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 34);
    \u0275\u0275listener("onClick", function CalibrationReportComponent_div_20_ng_template_15_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.exportCSV());
    });
    \u0275\u0275elementEnd();
  }
}
function CalibrationReportComponent_div_20_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "Equipment Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Serial Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Calibration Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Result");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Performed By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Next Calibration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Remarks");
    \u0275\u0275elementEnd()();
  }
}
function CalibrationReportComponent_div_20_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "p-tag", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 9, row_r8.date, "shortDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r8.equipmentName || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.serialNumber || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.calibrationType || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r8.result)("severity", ctx_r1.getResultSeverity(row_r8.result));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.performedBy || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 12, row_r8.nextCalibrationDate, "shortDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r8.remarks || "N/A");
  }
}
function CalibrationReportComponent_div_20_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2, "No records found.");
    \u0275\u0275elementEnd()();
  }
}
function CalibrationReportComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "h3", 27);
    \u0275\u0275text(3, "Monthly Calibration Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p")(5, "strong");
    \u0275\u0275text(6, "Period:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10, "Total Records:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p-toolbar", 28);
    \u0275\u0275template(13, CalibrationReportComponent_div_20_ng_template_13_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, CalibrationReportComponent_div_20_ng_template_15_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p-table", 29);
    \u0275\u0275template(18, CalibrationReportComponent_div_20_ng_template_18_Template, 17, 0, "ng-template", 30)(19, CalibrationReportComponent_div_20_ng_template_19_Template, 19, 15, "ng-template", 31)(20, CalibrationReportComponent_div_20_ng_template_20_Template, 3, 0, "ng-template", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", ctx_r1.getMonthName(ctx_r1.selectedMonth), " ", ctx_r1.selectedYear);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.reportData.records == null ? null : ctx_r1.reportData.records.length) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", ctx_r1.reportData.records)("rows", 10)("paginator", true)("rowsPerPageOptions", \u0275\u0275pureFunction0(8, _c020))("tableStyle", \u0275\u0275pureFunction0(9, _c29));
  }
}
function CalibrationReportComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, 'Select filters and click "Generate Report" to view data.');
    \u0275\u0275elementEnd()();
  }
}
var CalibrationReportComponent = class _CalibrationReportComponent {
  reportService;
  reportType = "daily";
  selectedDate = /* @__PURE__ */ new Date();
  selectedMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
  selectedYear = (/* @__PURE__ */ new Date()).getFullYear();
  reportData = null;
  isLoading = false;
  errorMessage = "";
  reportTypes = [
    { label: "Daily Report", value: "daily" },
    { label: "Monthly Report", value: "monthly" }
  ];
  months = [
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "August", value: 8 },
    { label: "September", value: 9 },
    { label: "October", value: 10 },
    { label: "November", value: 11 },
    { label: "December", value: 12 }
  ];
  years = [];
  constructor(reportService) {
    this.reportService = reportService;
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    for (let i = 2020; i <= currentYear + 5; i++) {
      this.years.push(i);
    }
  }
  ngOnInit() {
  }
  onReportTypeChange() {
    this.reportData = null;
    this.errorMessage = "";
  }
  generateReport() {
    this.isLoading = true;
    this.errorMessage = "";
    this.reportData = null;
    if (this.reportType === "daily") {
      const dateStr = this.formatDateToString(this.selectedDate);
      this.reportService.getDailyCalibrationReport(dateStr).subscribe({
        next: (data) => {
          this.reportData = data;
          this.isLoading = false;
          console.log("\u2705 Daily Calibration Report loaded:", data);
        },
        error: (error) => {
          this.errorMessage = error.error?.message || "Failed to generate daily calibration report";
          this.isLoading = false;
          console.error("\u274C Error loading daily calibration report:", error);
        }
      });
    } else {
      this.reportService.getMonthlyCalibrationReport(this.selectedMonth, this.selectedYear).subscribe({
        next: (data) => {
          this.reportData = data;
          this.isLoading = false;
          console.log("\u2705 Monthly Calibration Report loaded:", data);
        },
        error: (error) => {
          this.errorMessage = error.error?.message || "Failed to generate monthly calibration report";
          this.isLoading = false;
          console.error("\u274C Error loading monthly calibration report:", error);
        }
      });
    }
  }
  formatDateToString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  formatDate(date) {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  getMonthName(month) {
    const monthObj = this.months.find((m) => m.value === month);
    return monthObj ? monthObj.label : "Unknown";
  }
  getResultSeverity(result) {
    const lowerResult = result?.toLowerCase() || "";
    if (lowerResult.includes("pass") || lowerResult.includes("success") || lowerResult.includes("calibrated")) {
      return "success";
    } else if (lowerResult.includes("fail") || lowerResult.includes("reject")) {
      return "danger";
    } else if (lowerResult.includes("pending") || lowerResult.includes("scheduled")) {
      return "warn";
    }
    return "secondary";
  }
  exportCSV() {
    if (!this.reportData || !this.reportData.records) {
      console.warn("No data to export");
      return;
    }
    let csv = "";
    let filename = "";
    if (this.reportType === "daily") {
      csv = "Date,Equipment Name,Serial Number,Calibration Type,Result,Performed By,Remarks\n";
      csv += this.reportData.records.map((r) => {
        const date = new Date(r.date).toISOString().split("T")[0];
        return `"${date}","${r.equipmentName}","${r.serialNumber}","${r.calibrationType}","${r.result}","${r.performedBy}","${r.remarks}"`;
      }).join("\n");
      filename = `calibration-daily-${this.formatDateToString(this.selectedDate)}.csv`;
    } else {
      csv = "Date,Equipment Name,Serial Number,Calibration Type,Result,Performed By,Next Calibration,Remarks\n";
      csv += this.reportData.records.map((r) => {
        const date = new Date(r.date).toISOString().split("T")[0];
        const nextDate = r.nextCalibrationDate ? new Date(r.nextCalibrationDate).toISOString().split("T")[0] : "N/A";
        return `"${date}","${r.equipmentName}","${r.serialNumber}","${r.calibrationType}","${r.result}","${r.performedBy}","${nextDate}","${r.remarks}"`;
      }).join("\n");
      filename = `calibration-monthly-${this.selectedYear}-${this.selectedMonth}.csv`;
    }
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function CalibrationReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CalibrationReportComponent)(\u0275\u0275directiveInject(ReportService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CalibrationReportComponent, selectors: [["app-calibration-report"]], decls: 22, vars: 12, consts: [["start", ""], ["end", ""], [1, "card"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-2xl", "font-bold", "mb-1"], [1, "text-muted-color"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-4", "mb-4", "p-4", "bg-surface-50", "dark:bg-surface-800", "rounded"], [1, "flex", "flex-col", "gap-2"], ["for", "reportType", 1, "font-semibold"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Select report type", 3, "ngModelChange", "onChange", "ngModel", "options"], ["class", "flex flex-col gap-2", 4, "ngIf"], [1, "flex", "items-end"], ["label", "Generate Report", "icon", "pi pi-chart-bar", 3, "onClick", "disabled", "loading"], ["severity", "error", "styleClass", "mb-4 w-full", 3, "text", 4, "ngIf"], ["class", "flex justify-center items-center py-8", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], ["class", "text-center py-8 text-muted-color", 4, "ngIf"], ["for", "selectedDate", 1, "font-semibold"], ["inputId", "selectedDate", "placeholder", "Select date", "dateFormat", "yy-mm-dd", 3, "ngModelChange", "ngModel"], ["for", "selectedMonth", 1, "font-semibold"], ["optionLabel", "label", "optionValue", "value", "placeholder", "Select month", 3, "ngModelChange", "ngModel", "options"], ["for", "selectedYear", 1, "font-semibold"], ["placeholder", "Select year", 3, "ngModelChange", "ngModel", "options"], ["severity", "error", "styleClass", "mb-4 w-full", 3, "text"], [1, "flex", "justify-center", "items-center", "py-8"], [1, "mt-4"], [1, "mb-4", "p-4", "bg-surface-100", "dark:bg-surface-700", "rounded"], [1, "text-xl", "font-bold", "mb-2"], ["styleClass", "mb-2"], [3, "value", "rows", "paginator", "rowsPerPageOptions", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "font-semibold"], ["label", "Export CSV", "icon", "pi pi-upload", "size", "small", 3, "onClick"], [3, "value", "severity"], ["colspan", "7", 1, "text-center", "py-4"], ["colspan", "8", 1, "text-center", "py-4"], [1, "text-center", "py-8", "text-muted-color"], [1, "pi", "pi-info-circle", "text-4xl", "mb-3"]], template: function CalibrationReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div")(3, "h2", 4);
      \u0275\u0275text(4, "Calibration Report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 5);
      \u0275\u0275text(6, "Generate daily or monthly calibration reports for equipment maintenance.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "label", 8);
      \u0275\u0275text(10, "Report Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p-select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function CalibrationReportComponent_Template_p_select_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.reportType, $event) || (ctx.reportType = $event);
        return $event;
      });
      \u0275\u0275listener("onChange", function CalibrationReportComponent_Template_p_select_onChange_11_listener() {
        return ctx.onReportTypeChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, CalibrationReportComponent_div_12_Template, 4, 1, "div", 10)(13, CalibrationReportComponent_div_13_Template, 4, 2, "div", 10)(14, CalibrationReportComponent_div_14_Template, 4, 2, "div", 10);
      \u0275\u0275elementStart(15, "div", 11)(16, "p-button", 12);
      \u0275\u0275listener("onClick", function CalibrationReportComponent_Template_p_button_onClick_16_listener() {
        return ctx.generateReport();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(17, CalibrationReportComponent_p_message_17_Template, 1, 1, "p-message", 13)(18, CalibrationReportComponent_div_18_Template, 2, 0, "div", 14)(19, CalibrationReportComponent_div_19_Template, 21, 9, "div", 15)(20, CalibrationReportComponent_div_20_Template, 21, 10, "div", 15)(21, CalibrationReportComponent_div_21_Template, 4, 0, "div", 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.reportType);
      \u0275\u0275property("options", ctx.reportTypes);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportType === "daily");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportType === "monthly");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportType === "monthly");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isLoading)("loading", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportData && ctx.reportType === "daily" && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.reportData && ctx.reportType === "monthly" && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.reportData && !ctx.isLoading && !ctx.errorMessage);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, ToolbarModule, Toolbar, PrimeTemplate, ButtonModule, Button, DatePickerModule, DatePicker, TableModule, Table, TabsModule, TagModule, Tag, SelectModule, Select, InputTextModule, ProgressSpinnerModule, ProgressSpinner, MessageModule, Message, CardModule, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalibrationReportComponent, [{
    type: Component,
    args: [{
      selector: "app-calibration-report",
      standalone: true,
      imports: [CommonModule, FormsModule, ToolbarModule, ButtonModule, DatePickerModule, TableModule, TabsModule, TagModule, SelectModule, InputTextModule, ProgressSpinnerModule, MessageModule, CardModule],
      template: `
        <div class="card">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h2 class="text-2xl font-bold mb-1">Calibration Report</h2>
                    <p class="text-muted-color">Generate daily or monthly calibration reports for equipment maintenance.</p>
                </div>
            </div>

            <!-- Filters Section -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 bg-surface-50 dark:bg-surface-800 rounded">
                <div class="flex flex-col gap-2">
                    <label for="reportType" class="font-semibold">Report Type</label>
                    <p-select [(ngModel)]="reportType" [options]="reportTypes" optionLabel="label" optionValue="value" placeholder="Select report type" (onChange)="onReportTypeChange()" />
                </div>

                <div class="flex flex-col gap-2" *ngIf="reportType === 'daily'">
                    <label for="selectedDate" class="font-semibold">Date</label>
                    <p-datepicker [(ngModel)]="selectedDate" inputId="selectedDate" placeholder="Select date" dateFormat="yy-mm-dd" />
                </div>

                <div class="flex flex-col gap-2" *ngIf="reportType === 'monthly'">
                    <label for="selectedMonth" class="font-semibold">Month</label>
                    <p-select [(ngModel)]="selectedMonth" [options]="months" optionLabel="label" optionValue="value" placeholder="Select month" />
                </div>

                <div class="flex flex-col gap-2" *ngIf="reportType === 'monthly'">
                    <label for="selectedYear" class="font-semibold">Year</label>
                    <p-select [(ngModel)]="selectedYear" [options]="years" placeholder="Select year" />
                </div>

                <div class="flex items-end">
                    <p-button label="Generate Report" icon="pi pi-chart-bar" (onClick)="generateReport()" [disabled]="isLoading" [loading]="isLoading" />
                </div>
            </div>

            <!-- Error Message -->
            <p-message *ngIf="errorMessage" severity="error" [text]="errorMessage" styleClass="mb-4 w-full" />

            <!-- Loading Spinner -->
            <div *ngIf="isLoading" class="flex justify-center items-center py-8">
                <p-progressSpinner />
            </div>

            <!-- Report Results - Daily -->
            <div *ngIf="reportData && reportType === 'daily' && !isLoading" class="mt-4">
                <div class="mb-4 p-4 bg-surface-100 dark:bg-surface-700 rounded">
                    <h3 class="text-xl font-bold mb-2">Daily Calibration Report</h3>
                    <p><strong>Date:</strong> {{ formatDate(selectedDate) }}</p>
                    <p><strong>Total Records:</strong> {{ reportData.records?.length || 0 }}</p>
                </div>

                <p-toolbar styleClass="mb-2">
                    <ng-template #start>
                        <span class="font-semibold">Daily Report Details</span>
                    </ng-template>
                    <ng-template #end>
                        <p-button label="Export CSV" icon="pi pi-upload" (onClick)="exportCSV()" size="small" />
                    </ng-template>
                </p-toolbar>

                <p-table [value]="reportData.records" [rows]="10" [paginator]="true" [rowsPerPageOptions]="[10, 20, 30]" [tableStyle]="{ 'min-width': '80rem' }">
                    <ng-template pTemplate="header">
                        <tr>
                            <th>Date</th>
                            <th>Equipment Name</th>
                            <th>Serial Number</th>
                            <th>Calibration Type</th>
                            <th>Result</th>
                            <th>Performed By</th>
                            <th>Remarks</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-row>
                        <tr>
                            <td>{{ row.date | date: 'shortDate' }}</td>
                            <td>{{ row.equipmentName || 'N/A' }}</td>
                            <td>{{ row.serialNumber || 'N/A' }}</td>
                            <td>{{ row.calibrationType || 'N/A' }}</td>
                            <td><p-tag [value]="row.result" [severity]="getResultSeverity(row.result)" /></td>
                            <td>{{ row.performedBy || 'N/A' }}</td>
                            <td>{{ row.remarks || 'N/A' }}</td>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="emptymessage">
                        <tr>
                            <td colspan="7" class="text-center py-4">No records found.</td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>

            <!-- Report Results - Monthly -->
            <div *ngIf="reportData && reportType === 'monthly' && !isLoading" class="mt-4">
                <div class="mb-4 p-4 bg-surface-100 dark:bg-surface-700 rounded">
                    <h3 class="text-xl font-bold mb-2">Monthly Calibration Report</h3>
                    <p><strong>Period:</strong> {{ getMonthName(selectedMonth) }} {{ selectedYear }}</p>
                    <p><strong>Total Records:</strong> {{ reportData.records?.length || 0 }}</p>
                </div>

                <p-toolbar styleClass="mb-2">
                    <ng-template #start>
                        <span class="font-semibold">Monthly Report Details</span>
                    </ng-template>
                    <ng-template #end>
                        <p-button label="Export CSV" icon="pi pi-upload" (onClick)="exportCSV()" size="small" />
                    </ng-template>
                </p-toolbar>

                <p-table [value]="reportData.records" [rows]="10" [paginator]="true" [rowsPerPageOptions]="[10, 20, 30]" [tableStyle]="{ 'min-width': '90rem' }">
                    <ng-template pTemplate="header">
                        <tr>
                            <th>Date</th>
                            <th>Equipment Name</th>
                            <th>Serial Number</th>
                            <th>Calibration Type</th>
                            <th>Result</th>
                            <th>Performed By</th>
                            <th>Next Calibration</th>
                            <th>Remarks</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-row>
                        <tr>
                            <td>{{ row.date | date: 'shortDate' }}</td>
                            <td>{{ row.equipmentName || 'N/A' }}</td>
                            <td>{{ row.serialNumber || 'N/A' }}</td>
                            <td>{{ row.calibrationType || 'N/A' }}</td>
                            <td><p-tag [value]="row.result" [severity]="getResultSeverity(row.result)" /></td>
                            <td>{{ row.performedBy || 'N/A' }}</td>
                            <td>{{ row.nextCalibrationDate | date: 'shortDate' }}</td>
                            <td>{{ row.remarks || 'N/A' }}</td>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="emptymessage">
                        <tr>
                            <td colspan="8" class="text-center py-4">No records found.</td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>

            <!-- No Data Message -->
            <div *ngIf="!reportData && !isLoading && !errorMessage" class="text-center py-8 text-muted-color">
                <i class="pi pi-info-circle text-4xl mb-3"></i>
                <p>Select filters and click "Generate Report" to view data.</p>
            </div>
        </div>
    `
    }]
  }], () => [{ type: ReportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CalibrationReportComponent, { className: "CalibrationReportComponent", filePath: "src/app/pages/reports/calibration-report.ts", lineNumber: 192 });
})();

// src/app/pages/masterplan/masterplan.ts
var _c021 = () => [4, 5, 6, 7, 8, 9, 10, 11, 12];
var _c119 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var _forTrack0 = ($index, $item) => $item.displayName;
var _forTrack1 = ($index, $item) => $item.equipment.assetId;
function MasterPlanComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementStart(2, "span", 25);
    \u0275\u0275text(3, "Master Plan");
    \u0275\u0275elementEnd()();
  }
}
function MasterPlanComponent_ng_template_3_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r3 = ctx.$implicit;
    \u0275\u0275property("value", year_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", year_r3, " ");
  }
}
function MasterPlanComponent_ng_template_3_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lab_r4 = ctx.$implicit;
    \u0275\u0275property("value", lab_r4.laboratoryId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lab_r4.laboratoryName, " ");
  }
}
function MasterPlanComponent_ng_template_3_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    \u0275\u0275property("value", category_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r5, " ");
  }
}
function MasterPlanComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 23)(2, "label", 27);
    \u0275\u0275text(3, "Year:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function MasterPlanComponent_ng_template_3_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedYear, $event) || (ctx_r1.selectedYear = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function MasterPlanComponent_ng_template_3_Template_select_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementStart(5, "option", 29);
    \u0275\u0275text(6, "All Years");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MasterPlanComponent_ng_template_3_option_7_Template, 2, 2, "option", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 23)(9, "label", 27);
    \u0275\u0275text(10, "Laboratory:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function MasterPlanComponent_ng_template_3_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedLaboratory, $event) || (ctx_r1.selectedLaboratory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function MasterPlanComponent_ng_template_3_Template_select_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementStart(12, "option", 29);
    \u0275\u0275text(13, "Select Laboratory");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, MasterPlanComponent_ng_template_3_option_14_Template, 2, 2, "option", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 23)(16, "label", 27);
    \u0275\u0275text(17, "Category:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function MasterPlanComponent_ng_template_3_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedCategory, $event) || (ctx_r1.selectedCategory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function MasterPlanComponent_ng_template_3_Template_select_ngModelChange_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterChange());
    });
    \u0275\u0275elementStart(19, "option", 29);
    \u0275\u0275text(20, "All Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, MasterPlanComponent_ng_template_3_option_21_Template, 2, 2, "option", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 23);
    \u0275\u0275element(23, "p-button", 31)(24, "p-button", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedYear);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.years);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedLaboratory);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.laboratories);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedCategory);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance(2);
    \u0275\u0275property("outlined", true);
    \u0275\u0275advance();
    \u0275\u0275property("outlined", true);
  }
}
function MasterPlanComponent_Conditional_37_For_28_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const group_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate1(" ", group_r6.displayName, " ");
  }
}
function MasterPlanComponent_Conditional_37_For_28_For_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "td");
  }
  if (rf & 2) {
    const equipment_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(equipment_r7.equipment.serialNumber);
  }
}
function MasterPlanComponent_Conditional_37_For_28_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const equipment_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(equipment_r7.equipment.serialNumber);
  }
}
function MasterPlanComponent_Conditional_37_For_28_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "td");
  }
  if (rf & 2) {
    const equipment_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(equipment_r7.equipment.serialNumber);
  }
}
function MasterPlanComponent_Conditional_37_For_28_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 40)(1, "td", 41);
    \u0275\u0275conditionalCreate(2, MasterPlanComponent_Conditional_37_For_28_For_1_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "td")(4, "td");
    \u0275\u0275conditionalCreate(5, MasterPlanComponent_Conditional_37_For_28_For_1_Conditional_5_Template, 3, 1)(6, MasterPlanComponent_Conditional_37_For_28_For_1_Conditional_6_Template, 3, 1)(7, MasterPlanComponent_Conditional_37_For_28_For_1_Conditional_7_Template, 3, 1);
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "td")(11, "td")(12, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const equipment_r7 = ctx.$implicit;
    const \u0275$index_165_r8 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275$index_165_r8 === 0 ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((equipment_r7.equipment.equipmentName == null ? null : equipment_r7.equipment.equipmentName.toLowerCase().includes("desktop")) || (equipment_r7.equipment.equipmentName == null ? null : equipment_r7.equipment.equipmentName.toLowerCase().includes("cpu")) ? 5 : (equipment_r7.equipment.equipmentName == null ? null : equipment_r7.equipment.equipmentName.toLowerCase().includes("monitor")) ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(equipment_r7.equipment.location || "N/A");
  }
}
function MasterPlanComponent_Conditional_37_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MasterPlanComponent_Conditional_37_For_28_For_1_Template, 13, 3, "tr", 40, _forTrack1);
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    \u0275\u0275repeater(group_r6.equipment);
  }
}
function MasterPlanComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 34)(1, "td", 35)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "small", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 37);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 38);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td")(25, "span", 39);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(27, MasterPlanComponent_Conditional_37_For_28_Template, 2, 0, null, null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.masterPlanData.laboratoryName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.masterPlanData.laboratoryLocation || "N/A");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.masterPlanData.totalEquipment || ctx_r1.equipmentList.length);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 6, ctx_r1.getTotalPrice(), "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getFunctionalCount());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.masterPlanData.underRepair || 0);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.groupedEquipment);
  }
}
function MasterPlanComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 42)(1, "td", 43);
    \u0275\u0275element(2, "i", 44);
    \u0275\u0275text(3, "A) Frequently Used");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "tr", 34)(5, "td", 35);
    \u0275\u0275text(6, "DATA SCIENCE LABORATORY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "strong");
    \u0275\u0275text(9, "41");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11, "1/4/2019");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13, "MMLY7SS0228130BC1D858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15, "DTVPPSP33984604B929600");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17, "Lab 9-204");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 37);
    \u0275\u0275text(19, "P56,810.00");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 38);
    \u0275\u0275text(22, "39");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td")(24, "span", 39);
    \u0275\u0275text(25, "2");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tr", 40)(27, "td", 41);
    \u0275\u0275text(28, "ICT Bldg. 9-204 2nd Flr.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "td")(30, "td");
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275text(32, "MMLY7SS0228130BC24858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34, "DTVPPSP339846048AB9600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "td")(36, "td")(37, "td")(38, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "tr", 40);
    \u0275\u0275element(40, "td", 41)(41, "td")(42, "td");
    \u0275\u0275elementStart(43, "td");
    \u0275\u0275text(44, "MMLY7SS0228130BC25858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td");
    \u0275\u0275text(46, "DTVPPSP339846048AA9600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "td")(48, "td")(49, "td")(50, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "tr", 40)(52, "td", 41);
    \u0275\u0275text(53, "ACER VERITON M2640");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "td")(55, "td");
    \u0275\u0275elementStart(56, "td");
    \u0275\u0275text(57, "MMLY7SS0228130BC26858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "td");
    \u0275\u0275text(59, "DTVPPSP339846048B69600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "td")(61, "td")(62, "td")(63, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "tr", 45)(65, "td", 41);
    \u0275\u0275text(66, 'Desktop w/21.5" Inches Led Monitor');
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "td")(68, "td");
    \u0275\u0275elementStart(69, "td");
    \u0275\u0275text(70, "MMLY7SS0228130BC27859B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td");
    \u0275\u0275text(72, "DTVPPSP339846040A09600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "td")(74, "td")(75, "td")(76, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "tr", 40)(78, "td", 46);
    \u0275\u0275text(79, "HDD: 1TB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(80, "td")(81, "td");
    \u0275\u0275elementStart(82, "td");
    \u0275\u0275text(83, "MMLY7SS0228130BC28858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "td");
    \u0275\u0275text(85, "DTVPPSP339846048A79600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(86, "td")(87, "td")(88, "td")(89, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "tr", 40)(91, "td", 46);
    \u0275\u0275text(92, "RAM: 8GB");
    \u0275\u0275elementEnd();
    \u0275\u0275element(93, "td")(94, "td");
    \u0275\u0275elementStart(95, "td");
    \u0275\u0275text(96, "MMLY7SS0228130BC29858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "td");
    \u0275\u0275text(98, "DTVPPSP339846048B89600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "td")(100, "td")(101, "td")(102, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "tr", 40)(104, "td", 46);
    \u0275\u0275text(105, "PROCESSOR: CORE/7");
    \u0275\u0275elementEnd();
    \u0275\u0275element(106, "td")(107, "td");
    \u0275\u0275elementStart(108, "td");
    \u0275\u0275text(109, "MMLY7SS0228130BC2B858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "td");
    \u0275\u0275text(111, "DTVPPSP339846048B29600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(112, "td")(113, "td")(114, "td")(115, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "tr", 40)(117, "td", 46);
    \u0275\u0275text(118, "OS: WINDOWS 10");
    \u0275\u0275elementEnd();
    \u0275\u0275element(119, "td")(120, "td");
    \u0275\u0275elementStart(121, "td");
    \u0275\u0275text(122, "MMLY7SS0228130BC2C858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "td");
    \u0275\u0275text(124, "DTVPPSP339846048A99600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(125, "td")(126, "td")(127, "td")(128, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "tr", 40);
    \u0275\u0275element(130, "td", 41)(131, "td")(132, "td");
    \u0275\u0275elementStart(133, "td");
    \u0275\u0275text(134, "MMLY7SS0228130BC2D858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "td");
    \u0275\u0275text(136, "DTVPPSP339846048A29600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(137, "td")(138, "td")(139, "td")(140, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "tr", 40);
    \u0275\u0275element(142, "td", 41)(143, "td")(144, "td");
    \u0275\u0275elementStart(145, "td");
    \u0275\u0275text(146, "MMLY7SS0228130BC2F858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "td");
    \u0275\u0275text(148, "DTVPPSP339846048BF9600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(149, "td")(150, "td")(151, "td")(152, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "tr", 40);
    \u0275\u0275element(154, "td", 41)(155, "td")(156, "td");
    \u0275\u0275elementStart(157, "td");
    \u0275\u0275text(158, "MMLY7SS0228130BC30858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "td");
    \u0275\u0275text(160, "DTVPPSP339846048AF9600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(161, "td")(162, "td")(163, "td")(164, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "tr", 40);
    \u0275\u0275element(166, "td", 41)(167, "td")(168, "td");
    \u0275\u0275elementStart(169, "td");
    \u0275\u0275text(170, "MMLY7SS0228130BC31858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "td");
    \u0275\u0275text(172, "DTVPPSP339846048A59600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(173, "td")(174, "td")(175, "td")(176, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "tr", 40);
    \u0275\u0275element(178, "td", 41)(179, "td")(180, "td");
    \u0275\u0275elementStart(181, "td");
    \u0275\u0275text(182, "MMLY7SS0228130BC32858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "td");
    \u0275\u0275text(184, "DTVPPSP339846048AC9600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(185, "td")(186, "td")(187, "td")(188, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "tr", 40);
    \u0275\u0275element(190, "td", 41)(191, "td")(192, "td");
    \u0275\u0275elementStart(193, "td");
    \u0275\u0275text(194, "MMLY7SS0228130BC33858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "td");
    \u0275\u0275text(196, "DTVPPSP339846048BC9600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(197, "td")(198, "td")(199, "td")(200, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "tr", 40);
    \u0275\u0275element(202, "td", 41)(203, "td")(204, "td");
    \u0275\u0275elementStart(205, "td");
    \u0275\u0275text(206, "MMLY7SS0228130BC34858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "td");
    \u0275\u0275text(208, "DTVPPSP339846048B99600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(209, "td")(210, "td")(211, "td")(212, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "tr", 40);
    \u0275\u0275element(214, "td", 41)(215, "td")(216, "td");
    \u0275\u0275elementStart(217, "td");
    \u0275\u0275text(218, "MMLY7SS0228130BC35858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "td");
    \u0275\u0275text(220, "DTVPPSP339846048979600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(221, "td")(222, "td")(223, "td")(224, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(225, "tr", 40);
    \u0275\u0275element(226, "td", 41)(227, "td")(228, "td");
    \u0275\u0275elementStart(229, "td");
    \u0275\u0275text(230, "MMLY7SS0228130BC38858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "td");
    \u0275\u0275text(232, "DTVPPSP339846048B99600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(233, "td")(234, "td")(235, "td")(236, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(237, "tr", 40);
    \u0275\u0275element(238, "td", 41)(239, "td")(240, "td");
    \u0275\u0275elementStart(241, "td");
    \u0275\u0275text(242, "MMLY7SS0228130BC37858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(243, "td");
    \u0275\u0275text(244, "DTVPPSP339846048A19600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(245, "td")(246, "td")(247, "td")(248, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(249, "tr", 40);
    \u0275\u0275element(250, "td", 41)(251, "td")(252, "td");
    \u0275\u0275elementStart(253, "td");
    \u0275\u0275text(254, "MMLY7SS0228130BC38858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(255, "td");
    \u0275\u0275text(256, "DTVPPSP339846048BC9600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(257, "td")(258, "td")(259, "td")(260, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(261, "tr", 40);
    \u0275\u0275element(262, "td", 41)(263, "td")(264, "td");
    \u0275\u0275elementStart(265, "td");
    \u0275\u0275text(266, "MMLY7SS0228130BC39858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(267, "td");
    \u0275\u0275text(268, "DTVPPSP339846048B39600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(269, "td")(270, "td")(271, "td")(272, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(273, "tr", 40);
    \u0275\u0275element(274, "td", 41)(275, "td")(276, "td");
    \u0275\u0275elementStart(277, "td");
    \u0275\u0275text(278, "MMLY7SS0228130BF85858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(279, "td");
    \u0275\u0275text(280, "DTVPPSP339846048BD9600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(281, "td")(282, "td")(283, "td")(284, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(285, "tr", 40);
    \u0275\u0275element(286, "td", 41)(287, "td")(288, "td");
    \u0275\u0275elementStart(289, "td");
    \u0275\u0275text(290, "MMLY7SS0228130BFB6858B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(291, "td");
    \u0275\u0275text(292, "DTVPPSP339846048B09600");
    \u0275\u0275elementEnd();
    \u0275\u0275element(293, "td")(294, "td")(295, "td")(296, "td");
    \u0275\u0275elementEnd();
  }
}
function MasterPlanComponent_Conditional_141_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r9 = ctx.$implicit;
    const equipment_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMaintenanceMark(equipment_r10, month_r9, "inventory"));
  }
}
function MasterPlanComponent_Conditional_141_For_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r11 = ctx.$implicit;
    const equipment_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMaintenanceMark(equipment_r10, month_r11, "preventive"));
  }
}
function MasterPlanComponent_Conditional_141_For_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r12 = ctx.$implicit;
    const equipment_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMaintenanceMark(equipment_r10, month_r12, "corrective"));
  }
}
function MasterPlanComponent_Conditional_141_For_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const month_r13 = ctx.$implicit;
    const equipment_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getMaintenanceMark(equipment_r10, month_r13, "calibration"));
  }
}
function MasterPlanComponent_Conditional_141_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, MasterPlanComponent_Conditional_141_For_1_For_2_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(3, MasterPlanComponent_Conditional_141_For_1_For_4_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(5, MasterPlanComponent_Conditional_141_For_1_For_6_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(7, MasterPlanComponent_Conditional_141_For_1_For_8_Template, 2, 1, "td", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c021));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c021));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(2, _c119));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(3, _c119));
  }
}
function MasterPlanComponent_Conditional_141_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MasterPlanComponent_Conditional_141_For_1_Template, 9, 4, "tr", null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.equipmentList);
  }
}
function MasterPlanComponent_Conditional_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275element(1, "td")(2, "td")(3, "td")(4, "td")(5, "td")(6, "td")(7, "td")(8, "td")(9, "td")(10, "td")(11, "td")(12, "td")(13, "td")(14, "td")(15, "td")(16, "td")(17, "td")(18, "td")(19, "td")(20, "td")(21, "td")(22, "td")(23, "td")(24, "td")(25, "td")(26, "td")(27, "td")(28, "td")(29, "td")(30, "td")(31, "td")(32, "td")(33, "td")(34, "td")(35, "td")(36, "td")(37, "td")(38, "td")(39, "td")(40, "td")(41, "td")(42, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "tr");
    \u0275\u0275element(44, "td")(45, "td")(46, "td")(47, "td")(48, "td")(49, "td")(50, "td")(51, "td")(52, "td")(53, "td")(54, "td")(55, "td")(56, "td")(57, "td")(58, "td")(59, "td")(60, "td")(61, "td")(62, "td")(63, "td")(64, "td")(65, "td")(66, "td")(67, "td")(68, "td")(69, "td")(70, "td")(71, "td")(72, "td")(73, "td")(74, "td")(75, "td")(76, "td")(77, "td")(78, "td")(79, "td")(80, "td")(81, "td")(82, "td")(83, "td")(84, "td")(85, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "tr");
    \u0275\u0275element(87, "td")(88, "td")(89, "td")(90, "td")(91, "td")(92, "td")(93, "td")(94, "td")(95, "td")(96, "td")(97, "td")(98, "td")(99, "td")(100, "td")(101, "td")(102, "td")(103, "td")(104, "td")(105, "td")(106, "td")(107, "td")(108, "td")(109, "td")(110, "td")(111, "td")(112, "td")(113, "td")(114, "td")(115, "td")(116, "td")(117, "td")(118, "td")(119, "td")(120, "td")(121, "td")(122, "td")(123, "td")(124, "td")(125, "td")(126, "td")(127, "td")(128, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "tr");
    \u0275\u0275element(130, "td")(131, "td")(132, "td")(133, "td")(134, "td")(135, "td")(136, "td")(137, "td")(138, "td")(139, "td")(140, "td")(141, "td")(142, "td")(143, "td")(144, "td")(145, "td")(146, "td")(147, "td")(148, "td")(149, "td")(150, "td")(151, "td")(152, "td")(153, "td")(154, "td")(155, "td")(156, "td")(157, "td")(158, "td")(159, "td")(160, "td")(161, "td")(162, "td")(163, "td")(164, "td")(165, "td")(166, "td")(167, "td")(168, "td")(169, "td")(170, "td")(171, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(172, "tr");
    \u0275\u0275element(173, "td")(174, "td")(175, "td")(176, "td")(177, "td")(178, "td")(179, "td")(180, "td")(181, "td")(182, "td")(183, "td")(184, "td")(185, "td")(186, "td")(187, "td")(188, "td")(189, "td")(190, "td")(191, "td")(192, "td")(193, "td")(194, "td")(195, "td")(196, "td")(197, "td")(198, "td")(199, "td")(200, "td")(201, "td")(202, "td")(203, "td")(204, "td")(205, "td")(206, "td")(207, "td")(208, "td")(209, "td")(210, "td")(211, "td")(212, "td")(213, "td")(214, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(215, "tr");
    \u0275\u0275element(216, "td")(217, "td")(218, "td")(219, "td")(220, "td")(221, "td")(222, "td")(223, "td")(224, "td")(225, "td")(226, "td")(227, "td")(228, "td")(229, "td")(230, "td")(231, "td")(232, "td")(233, "td")(234, "td")(235, "td")(236, "td")(237, "td")(238, "td")(239, "td")(240, "td")(241, "td")(242, "td")(243, "td")(244, "td")(245, "td")(246, "td")(247, "td")(248, "td")(249, "td")(250, "td")(251, "td")(252, "td")(253, "td")(254, "td")(255, "td")(256, "td")(257, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(258, "tr");
    \u0275\u0275element(259, "td")(260, "td")(261, "td")(262, "td")(263, "td")(264, "td")(265, "td")(266, "td")(267, "td")(268, "td")(269, "td")(270, "td")(271, "td")(272, "td")(273, "td")(274, "td")(275, "td")(276, "td")(277, "td")(278, "td")(279, "td")(280, "td")(281, "td")(282, "td")(283, "td")(284, "td")(285, "td")(286, "td")(287, "td")(288, "td")(289, "td")(290, "td")(291, "td")(292, "td")(293, "td")(294, "td")(295, "td")(296, "td")(297, "td")(298, "td")(299, "td")(300, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(301, "tr");
    \u0275\u0275element(302, "td")(303, "td")(304, "td")(305, "td")(306, "td")(307, "td")(308, "td")(309, "td")(310, "td")(311, "td")(312, "td")(313, "td")(314, "td")(315, "td")(316, "td")(317, "td")(318, "td")(319, "td")(320, "td")(321, "td")(322, "td")(323, "td")(324, "td")(325, "td")(326, "td")(327, "td")(328, "td")(329, "td")(330, "td")(331, "td")(332, "td")(333, "td")(334, "td")(335, "td")(336, "td")(337, "td")(338, "td")(339, "td")(340, "td")(341, "td")(342, "td")(343, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(344, "tr");
    \u0275\u0275element(345, "td")(346, "td")(347, "td")(348, "td")(349, "td")(350, "td")(351, "td")(352, "td")(353, "td")(354, "td")(355, "td")(356, "td")(357, "td")(358, "td")(359, "td")(360, "td")(361, "td")(362, "td")(363, "td")(364, "td")(365, "td")(366, "td")(367, "td")(368, "td")(369, "td")(370, "td")(371, "td")(372, "td")(373, "td")(374, "td")(375, "td")(376, "td")(377, "td")(378, "td")(379, "td")(380, "td")(381, "td")(382, "td")(383, "td")(384, "td")(385, "td")(386, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(387, "tr");
    \u0275\u0275element(388, "td")(389, "td")(390, "td")(391, "td")(392, "td")(393, "td")(394, "td")(395, "td")(396, "td")(397, "td")(398, "td")(399, "td")(400, "td")(401, "td")(402, "td")(403, "td")(404, "td")(405, "td")(406, "td")(407, "td")(408, "td")(409, "td")(410, "td")(411, "td")(412, "td")(413, "td")(414, "td")(415, "td")(416, "td")(417, "td")(418, "td")(419, "td")(420, "td")(421, "td")(422, "td")(423, "td")(424, "td")(425, "td")(426, "td")(427, "td")(428, "td")(429, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(430, "tr");
    \u0275\u0275element(431, "td")(432, "td")(433, "td")(434, "td")(435, "td")(436, "td")(437, "td")(438, "td")(439, "td")(440, "td")(441, "td")(442, "td")(443, "td")(444, "td")(445, "td")(446, "td")(447, "td")(448, "td")(449, "td")(450, "td")(451, "td")(452, "td")(453, "td")(454, "td")(455, "td")(456, "td")(457, "td")(458, "td")(459, "td")(460, "td")(461, "td")(462, "td")(463, "td")(464, "td")(465, "td")(466, "td")(467, "td")(468, "td")(469, "td")(470, "td")(471, "td")(472, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(473, "tr");
    \u0275\u0275element(474, "td")(475, "td")(476, "td")(477, "td")(478, "td")(479, "td")(480, "td")(481, "td")(482, "td")(483, "td")(484, "td")(485, "td")(486, "td")(487, "td")(488, "td")(489, "td")(490, "td")(491, "td")(492, "td")(493, "td")(494, "td")(495, "td")(496, "td")(497, "td")(498, "td")(499, "td")(500, "td")(501, "td")(502, "td")(503, "td")(504, "td")(505, "td")(506, "td")(507, "td")(508, "td")(509, "td")(510, "td")(511, "td")(512, "td")(513, "td")(514, "td")(515, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(516, "tr");
    \u0275\u0275element(517, "td")(518, "td")(519, "td")(520, "td")(521, "td")(522, "td")(523, "td")(524, "td")(525, "td")(526, "td")(527, "td")(528, "td")(529, "td")(530, "td")(531, "td")(532, "td")(533, "td")(534, "td")(535, "td")(536, "td")(537, "td")(538, "td")(539, "td")(540, "td")(541, "td")(542, "td")(543, "td")(544, "td")(545, "td")(546, "td")(547, "td")(548, "td")(549, "td")(550, "td")(551, "td")(552, "td")(553, "td")(554, "td")(555, "td")(556, "td")(557, "td")(558, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(559, "tr");
    \u0275\u0275element(560, "td")(561, "td")(562, "td")(563, "td")(564, "td")(565, "td")(566, "td")(567, "td")(568, "td")(569, "td")(570, "td")(571, "td")(572, "td")(573, "td")(574, "td")(575, "td")(576, "td")(577, "td")(578, "td")(579, "td")(580, "td")(581, "td")(582, "td")(583, "td")(584, "td")(585, "td")(586, "td")(587, "td")(588, "td")(589, "td")(590, "td")(591, "td")(592, "td")(593, "td")(594, "td")(595, "td")(596, "td")(597, "td")(598, "td")(599, "td")(600, "td")(601, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(602, "tr");
    \u0275\u0275element(603, "td")(604, "td")(605, "td")(606, "td")(607, "td")(608, "td")(609, "td")(610, "td")(611, "td")(612, "td")(613, "td")(614, "td")(615, "td")(616, "td")(617, "td")(618, "td")(619, "td")(620, "td")(621, "td")(622, "td")(623, "td")(624, "td")(625, "td")(626, "td")(627, "td")(628, "td")(629, "td")(630, "td")(631, "td")(632, "td")(633, "td")(634, "td")(635, "td")(636, "td")(637, "td")(638, "td")(639, "td")(640, "td")(641, "td")(642, "td")(643, "td")(644, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(645, "tr");
    \u0275\u0275element(646, "td")(647, "td")(648, "td")(649, "td")(650, "td")(651, "td")(652, "td")(653, "td")(654, "td")(655, "td")(656, "td")(657, "td")(658, "td")(659, "td")(660, "td")(661, "td")(662, "td")(663, "td")(664, "td")(665, "td")(666, "td")(667, "td")(668, "td")(669, "td")(670, "td")(671, "td")(672, "td")(673, "td")(674, "td")(675, "td")(676, "td")(677, "td")(678, "td")(679, "td")(680, "td")(681, "td")(682, "td")(683, "td")(684, "td")(685, "td")(686, "td")(687, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(688, "tr");
    \u0275\u0275element(689, "td")(690, "td")(691, "td")(692, "td")(693, "td")(694, "td")(695, "td")(696, "td")(697, "td")(698, "td")(699, "td")(700, "td")(701, "td")(702, "td")(703, "td")(704, "td")(705, "td")(706, "td")(707, "td")(708, "td")(709, "td")(710, "td")(711, "td")(712, "td")(713, "td")(714, "td")(715, "td")(716, "td")(717, "td")(718, "td")(719, "td")(720, "td")(721, "td")(722, "td")(723, "td")(724, "td")(725, "td")(726, "td")(727, "td")(728, "td")(729, "td")(730, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(731, "tr");
    \u0275\u0275element(732, "td")(733, "td")(734, "td")(735, "td")(736, "td")(737, "td")(738, "td")(739, "td")(740, "td")(741, "td")(742, "td")(743, "td")(744, "td")(745, "td")(746, "td")(747, "td")(748, "td")(749, "td")(750, "td")(751, "td")(752, "td")(753, "td")(754, "td")(755, "td")(756, "td")(757, "td")(758, "td")(759, "td")(760, "td")(761, "td")(762, "td")(763, "td")(764, "td")(765, "td")(766, "td")(767, "td")(768, "td")(769, "td")(770, "td")(771, "td")(772, "td")(773, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(774, "tr");
    \u0275\u0275element(775, "td")(776, "td")(777, "td")(778, "td")(779, "td")(780, "td")(781, "td")(782, "td")(783, "td")(784, "td")(785, "td")(786, "td")(787, "td")(788, "td")(789, "td")(790, "td")(791, "td")(792, "td")(793, "td")(794, "td")(795, "td")(796, "td")(797, "td")(798, "td")(799, "td")(800, "td")(801, "td")(802, "td")(803, "td")(804, "td")(805, "td")(806, "td")(807, "td")(808, "td")(809, "td")(810, "td")(811, "td")(812, "td")(813, "td")(814, "td")(815, "td")(816, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(817, "tr");
    \u0275\u0275element(818, "td")(819, "td")(820, "td")(821, "td")(822, "td")(823, "td")(824, "td")(825, "td")(826, "td")(827, "td")(828, "td")(829, "td")(830, "td")(831, "td")(832, "td")(833, "td")(834, "td")(835, "td")(836, "td")(837, "td")(838, "td")(839, "td")(840, "td")(841, "td")(842, "td")(843, "td")(844, "td")(845, "td")(846, "td")(847, "td")(848, "td")(849, "td")(850, "td")(851, "td")(852, "td")(853, "td")(854, "td")(855, "td")(856, "td")(857, "td")(858, "td")(859, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(860, "tr");
    \u0275\u0275element(861, "td")(862, "td")(863, "td")(864, "td")(865, "td")(866, "td")(867, "td")(868, "td")(869, "td")(870, "td")(871, "td")(872, "td")(873, "td")(874, "td")(875, "td")(876, "td")(877, "td")(878, "td")(879, "td")(880, "td")(881, "td")(882, "td")(883, "td")(884, "td")(885, "td")(886, "td")(887, "td")(888, "td")(889, "td")(890, "td")(891, "td")(892, "td")(893, "td")(894, "td")(895, "td")(896, "td")(897, "td")(898, "td")(899, "td")(900, "td")(901, "td")(902, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(903, "tr");
    \u0275\u0275element(904, "td")(905, "td")(906, "td")(907, "td")(908, "td")(909, "td")(910, "td")(911, "td")(912, "td")(913, "td")(914, "td")(915, "td")(916, "td")(917, "td")(918, "td")(919, "td")(920, "td")(921, "td")(922, "td")(923, "td")(924, "td")(925, "td")(926, "td")(927, "td")(928, "td")(929, "td")(930, "td")(931, "td")(932, "td")(933, "td")(934, "td")(935, "td")(936, "td")(937, "td")(938, "td")(939, "td")(940, "td")(941, "td")(942, "td")(943, "td")(944, "td")(945, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(946, "tr");
    \u0275\u0275element(947, "td")(948, "td")(949, "td")(950, "td")(951, "td")(952, "td")(953, "td")(954, "td")(955, "td")(956, "td")(957, "td")(958, "td")(959, "td")(960, "td")(961, "td")(962, "td")(963, "td")(964, "td")(965, "td")(966, "td")(967, "td")(968, "td")(969, "td")(970, "td")(971, "td")(972, "td")(973, "td")(974, "td")(975, "td")(976, "td")(977, "td")(978, "td")(979, "td")(980, "td")(981, "td")(982, "td")(983, "td")(984, "td")(985, "td")(986, "td")(987, "td")(988, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(989, "tr");
    \u0275\u0275element(990, "td")(991, "td")(992, "td")(993, "td")(994, "td")(995, "td")(996, "td")(997, "td")(998, "td")(999, "td")(1e3, "td")(1001, "td")(1002, "td")(1003, "td")(1004, "td")(1005, "td")(1006, "td")(1007, "td")(1008, "td")(1009, "td")(1010, "td")(1011, "td")(1012, "td")(1013, "td")(1014, "td")(1015, "td")(1016, "td")(1017, "td")(1018, "td")(1019, "td")(1020, "td")(1021, "td")(1022, "td")(1023, "td")(1024, "td")(1025, "td")(1026, "td")(1027, "td")(1028, "td")(1029, "td")(1030, "td")(1031, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1032, "tr");
    \u0275\u0275element(1033, "td")(1034, "td")(1035, "td")(1036, "td")(1037, "td")(1038, "td")(1039, "td")(1040, "td")(1041, "td")(1042, "td")(1043, "td")(1044, "td")(1045, "td")(1046, "td")(1047, "td")(1048, "td")(1049, "td")(1050, "td")(1051, "td")(1052, "td")(1053, "td")(1054, "td")(1055, "td")(1056, "td")(1057, "td")(1058, "td")(1059, "td")(1060, "td")(1061, "td")(1062, "td")(1063, "td")(1064, "td")(1065, "td")(1066, "td")(1067, "td")(1068, "td")(1069, "td")(1070, "td")(1071, "td")(1072, "td")(1073, "td")(1074, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1075, "tr");
    \u0275\u0275element(1076, "td")(1077, "td")(1078, "td")(1079, "td")(1080, "td")(1081, "td")(1082, "td")(1083, "td")(1084, "td")(1085, "td")(1086, "td")(1087, "td")(1088, "td")(1089, "td")(1090, "td")(1091, "td")(1092, "td")(1093, "td")(1094, "td")(1095, "td")(1096, "td")(1097, "td")(1098, "td")(1099, "td")(1100, "td")(1101, "td")(1102, "td")(1103, "td")(1104, "td")(1105, "td")(1106, "td")(1107, "td")(1108, "td")(1109, "td")(1110, "td")(1111, "td")(1112, "td")(1113, "td")(1114, "td")(1115, "td")(1116, "td")(1117, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1118, "tr");
    \u0275\u0275element(1119, "td")(1120, "td")(1121, "td")(1122, "td")(1123, "td")(1124, "td")(1125, "td")(1126, "td")(1127, "td")(1128, "td")(1129, "td")(1130, "td")(1131, "td")(1132, "td")(1133, "td")(1134, "td")(1135, "td")(1136, "td")(1137, "td")(1138, "td")(1139, "td")(1140, "td")(1141, "td")(1142, "td")(1143, "td")(1144, "td")(1145, "td")(1146, "td")(1147, "td")(1148, "td")(1149, "td")(1150, "td")(1151, "td")(1152, "td")(1153, "td")(1154, "td")(1155, "td")(1156, "td")(1157, "td")(1158, "td")(1159, "td")(1160, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1161, "tr");
    \u0275\u0275element(1162, "td")(1163, "td")(1164, "td")(1165, "td")(1166, "td")(1167, "td")(1168, "td")(1169, "td")(1170, "td")(1171, "td")(1172, "td")(1173, "td")(1174, "td")(1175, "td")(1176, "td")(1177, "td")(1178, "td")(1179, "td")(1180, "td")(1181, "td")(1182, "td")(1183, "td")(1184, "td")(1185, "td")(1186, "td")(1187, "td")(1188, "td")(1189, "td")(1190, "td")(1191, "td")(1192, "td")(1193, "td")(1194, "td")(1195, "td")(1196, "td")(1197, "td")(1198, "td")(1199, "td")(1200, "td")(1201, "td")(1202, "td")(1203, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1204, "tr");
    \u0275\u0275element(1205, "td")(1206, "td")(1207, "td")(1208, "td")(1209, "td")(1210, "td")(1211, "td")(1212, "td")(1213, "td")(1214, "td")(1215, "td")(1216, "td")(1217, "td")(1218, "td")(1219, "td")(1220, "td")(1221, "td")(1222, "td")(1223, "td")(1224, "td")(1225, "td")(1226, "td")(1227, "td")(1228, "td")(1229, "td")(1230, "td")(1231, "td")(1232, "td")(1233, "td")(1234, "td")(1235, "td")(1236, "td")(1237, "td")(1238, "td")(1239, "td")(1240, "td")(1241, "td")(1242, "td")(1243, "td")(1244, "td")(1245, "td")(1246, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1247, "tr");
    \u0275\u0275element(1248, "td")(1249, "td")(1250, "td")(1251, "td")(1252, "td")(1253, "td")(1254, "td")(1255, "td")(1256, "td")(1257, "td")(1258, "td")(1259, "td")(1260, "td")(1261, "td")(1262, "td")(1263, "td")(1264, "td")(1265, "td")(1266, "td")(1267, "td")(1268, "td")(1269, "td")(1270, "td")(1271, "td")(1272, "td")(1273, "td")(1274, "td")(1275, "td")(1276, "td")(1277, "td")(1278, "td")(1279, "td")(1280, "td")(1281, "td")(1282, "td")(1283, "td")(1284, "td")(1285, "td")(1286, "td")(1287, "td")(1288, "td")(1289, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1290, "tr");
    \u0275\u0275element(1291, "td")(1292, "td")(1293, "td")(1294, "td")(1295, "td")(1296, "td")(1297, "td")(1298, "td")(1299, "td")(1300, "td")(1301, "td")(1302, "td")(1303, "td")(1304, "td")(1305, "td")(1306, "td")(1307, "td")(1308, "td")(1309, "td")(1310, "td")(1311, "td")(1312, "td")(1313, "td")(1314, "td")(1315, "td")(1316, "td")(1317, "td")(1318, "td")(1319, "td")(1320, "td")(1321, "td")(1322, "td")(1323, "td")(1324, "td")(1325, "td")(1326, "td")(1327, "td")(1328, "td")(1329, "td")(1330, "td")(1331, "td")(1332, "td");
    \u0275\u0275elementEnd();
  }
}
var MasterPlanComponent = class _MasterPlanComponent {
  http;
  selectedYear = "";
  selectedLaboratory = "";
  selectedCategory = "";
  laboratories = [];
  years = [];
  categories = ["Software", "Hardware"];
  masterPlanData = null;
  equipmentList = [];
  groupedEquipment = [];
  currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.generateYears();
    this.loadLaboratories();
  }
  generateYears() {
    const years = [];
    for (let i = this.currentYear; i >= this.currentYear - 10; i--) {
      years.push(i.toString());
    }
    this.years = years;
    console.log("\u{1F4C5} Available years:", this.years);
  }
  getMaintenanceMark(equipment, month, type) {
    if (!equipment || !equipment.monthlyData)
      return "";
    const monthData = equipment.monthlyData.find((m) => m.month === month);
    if (!monthData || !monthData.maintenance)
      return "";
    return monthData.maintenance[type] === "X" ? "X" : "";
  }
  onFilterChange() {
    console.log("\u{1F50D} Filter Changed");
    console.log("\u{1F4C5} Selected Year:", this.selectedYear || "ALL");
    console.log("\u{1F3E2} Selected Laboratory:", this.selectedLaboratory || "ALL");
    console.log("\u{1F4C2} Selected Category:", this.selectedCategory || "ALL");
    if (this.selectedYear && this.selectedLaboratory) {
      this.fetchMasterPlanData();
    } else {
      console.warn("\u26A0\uFE0F Both year and laboratory must be selected to fetch data");
    }
  }
  fetchMasterPlanData() {
    const apiUrl = `${environment.apiUrl}/reports/master-plan/annual`;
    const params = {
      year: this.selectedYear,
      laboratoryId: this.selectedLaboratory
    };
    console.log("\u{1F4E1} Fetching Master Plan data from:", apiUrl);
    console.log("\u{1F4CB} Query Parameters:", params);
    this.http.get(apiUrl, { params }).subscribe({
      next: (data) => {
        console.log("\u2705 Master Plan Data Loaded:", data);
        console.table(data);
        this.masterPlanData = data;
        let allEquipment = data.equipmentMaintenances || [];
        if (this.selectedCategory) {
          this.equipmentList = allEquipment.filter((item) => item.equipment?.category === this.selectedCategory);
          console.log(`\u{1F50D} Filtered by category "${this.selectedCategory}":`, this.equipmentList.length, "items");
        } else {
          this.equipmentList = allEquipment;
        }
        this.groupEquipment();
        console.log("\u{1F4E6} Equipment List:", this.equipmentList);
        console.log("\u{1F522} Total Equipment:", this.equipmentList.length);
        console.log("\u{1F4CA} Grouped Equipment:", this.groupedEquipment);
      },
      error: (error) => {
        console.error("\u274C Error fetching Master Plan data:", error);
      }
    });
  }
  groupEquipment() {
    const grouped = /* @__PURE__ */ new Map();
    this.equipmentList.forEach((item) => {
      const key = `${item.equipment.equipmentName || ""} ${item.equipment.specifications || ""}`.trim();
      if (!grouped.has(key)) {
        grouped.set(key, []);
      }
      grouped.get(key)?.push(item);
    });
    this.groupedEquipment = Array.from(grouped.entries()).map(([key, items]) => ({
      displayName: key,
      equipment: items
    }));
  }
  getTotalPrice() {
    return this.equipmentList.reduce((total, item) => {
      const price = parseFloat(item.equipment?.price) || 0;
      return total + price;
    }, 0);
  }
  getFunctionalCount() {
    if (!this.masterPlanData)
      return 0;
    const total = this.masterPlanData.totalEquipment || 0;
    const underRepair = this.masterPlanData.underRepair || 0;
    return total - underRepair;
  }
  loadLaboratories() {
    const apiUrl = `${environment.apiUrl}/laboratories`;
    console.log("\u{1F4E1} Fetching laboratories from:", apiUrl);
    this.http.get(apiUrl).subscribe({
      next: (data) => {
        console.log("\u2705 Laboratories loaded:", data);
        this.laboratories = data || [];
        console.log("\u{1F4CA} Total laboratories:", this.laboratories.length);
      },
      error: (error) => {
        console.error("\u274C Error loading laboratories:", error);
      }
    });
  }
  static \u0275fac = function MasterPlanComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MasterPlanComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MasterPlanComponent, selectors: [["app-masterplan"]], decls: 143, vars: 2, consts: [["start", ""], ["end", ""], ["styleClass", "mb-4"], [1, "master-plan-container"], [1, "master-plan-split"], [1, "master-plan-section", "particulars"], [1, "section-header"], [1, "pi", "pi-list", "mr-2"], [1, "table-wrapper"], [1, "particulars-table"], ["rowspan", "2"], ["colspan", "2"], [1, "master-plan-section", "timeline"], [1, "pi", "pi-wrench", "mr-2"], [1, "maintenance-table"], ["colspan", "9", 1, "inventory-header"], ["colspan", "9", 1, "preventive-header"], ["colspan", "12", 1, "corrective-header"], ["colspan", "12", 1, "calibration-header"], [1, "inventory-header"], [1, "preventive-header"], [1, "corrective-header"], [1, "calibration-header"], [1, "flex", "items-center", "gap-2"], [1, "pi", "pi-calendar", "text-2xl", 2, "color", "#667eea"], [1, "text-xl", "font-bold"], [1, "flex", "items-center", "gap-4"], [1, "font-semibold"], [1, "p-inputtext", 2, "padding", "8px 12px", "border", "1px solid #ccc", "border-radius", "4px", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["label", "Print", "icon", "pi pi-print", "severity", "secondary", 3, "outlined"], ["label", "Export", "icon", "pi pi-upload", "severity", "success", 3, "outlined"], [3, "value"], [1, "item-row"], [2, "text-align", "left", "padding-left", "16px"], [2, "color", "#718096", "font-size", "0.85em"], [2, "color", "#2f855a", "font-weight", "600"], [2, "background", "#c6f6d5", "color", "#276749", "padding", "4px 12px", "border-radius", "12px", "font-weight", "600"], [2, "background", "#fed7d7", "color", "#c53030", "padding", "4px 12px", "border-radius", "12px", "font-weight", "600"], [1, "sub-item"], [2, "text-align", "left", "padding-left", "32px"], [1, "section-header-row"], ["colspan", "9"], [1, "pi", "pi-tag", "mr-2"], [1, "sub-item", "red-text"], [2, "text-align", "left", "padding-left", "48px"]], template: function MasterPlanComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-toolbar", 2);
      \u0275\u0275template(1, MasterPlanComponent_ng_template_1_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, MasterPlanComponent_ng_template_3_Template, 25, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6);
      \u0275\u0275element(9, "i", 7);
      \u0275\u0275text(10, " PARTICULARS ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "table", 9)(13, "thead")(14, "tr")(15, "th", 10);
      \u0275\u0275text(16, "Name of Machine / Equipment / Instrument");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "th", 10);
      \u0275\u0275text(18, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "th", 10);
      \u0275\u0275text(20, "Acquired");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th", 11);
      \u0275\u0275text(22, "Serial No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th", 10);
      \u0275\u0275text(24, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th", 10);
      \u0275\u0275text(26, "Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th", 10);
      \u0275\u0275text(28, "Functional");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 10);
      \u0275\u0275text(30, "Under Repair");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "tr")(32, "th");
      \u0275\u0275text(33, "Desktop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "MONITOR / CPU");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "tbody");
      \u0275\u0275conditionalCreate(37, MasterPlanComponent_Conditional_37_Template, 29, 9)(38, MasterPlanComponent_Conditional_38_Template, 297, 0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 12)(40, "div", 6);
      \u0275\u0275element(41, "i", 13);
      \u0275\u0275text(42, " TIMELINE ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 8)(44, "table", 14)(45, "thead")(46, "tr")(47, "th", 15);
      \u0275\u0275text(48, "INVENTORY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 16);
      \u0275\u0275text(50, "PREVENTIVE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th", 17);
      \u0275\u0275text(52, "CORRECTIVE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 18);
      \u0275\u0275text(54, "CALIBRATION");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "tr")(56, "th", 19);
      \u0275\u0275text(57, "APR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 19);
      \u0275\u0275text(59, "MAY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 19);
      \u0275\u0275text(61, "JUN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 19);
      \u0275\u0275text(63, "JUL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 19);
      \u0275\u0275text(65, "AUG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 19);
      \u0275\u0275text(67, "SEP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 19);
      \u0275\u0275text(69, "OCT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 19);
      \u0275\u0275text(71, "NOV");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th", 19);
      \u0275\u0275text(73, "DEC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 20);
      \u0275\u0275text(75, "APR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 20);
      \u0275\u0275text(77, "MAY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 20);
      \u0275\u0275text(79, "JUN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 20);
      \u0275\u0275text(81, "JUL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 20);
      \u0275\u0275text(83, "AUG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 20);
      \u0275\u0275text(85, "SEP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 20);
      \u0275\u0275text(87, "OCT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 20);
      \u0275\u0275text(89, "NOV");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 20);
      \u0275\u0275text(91, "DEC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 21);
      \u0275\u0275text(93, "JAN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th", 21);
      \u0275\u0275text(95, "FEB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th", 21);
      \u0275\u0275text(97, "MAR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 21);
      \u0275\u0275text(99, "APR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "th", 21);
      \u0275\u0275text(101, "MAY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "th", 21);
      \u0275\u0275text(103, "JUN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th", 21);
      \u0275\u0275text(105, "JUL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th", 21);
      \u0275\u0275text(107, "AUG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "th", 21);
      \u0275\u0275text(109, "SEP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th", 21);
      \u0275\u0275text(111, "OCT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th", 21);
      \u0275\u0275text(113, "NOV");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th", 21);
      \u0275\u0275text(115, "DEC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "th", 22);
      \u0275\u0275text(117, "JAN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th", 22);
      \u0275\u0275text(119, "FEB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th", 22);
      \u0275\u0275text(121, "MAR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "th", 22);
      \u0275\u0275text(123, "APR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "th", 22);
      \u0275\u0275text(125, "MAY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "th", 22);
      \u0275\u0275text(127, "JUN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "th", 22);
      \u0275\u0275text(129, "JUL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "th", 22);
      \u0275\u0275text(131, "AUG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "th", 22);
      \u0275\u0275text(133, "SEP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "th", 22);
      \u0275\u0275text(135, "OCT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "th", 22);
      \u0275\u0275text(137, "NOV");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "th", 22);
      \u0275\u0275text(139, "DEC");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "tbody");
      \u0275\u0275conditionalCreate(141, MasterPlanComponent_Conditional_141_Template, 2, 0)(142, MasterPlanComponent_Conditional_142_Template, 1333, 0);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(37);
      \u0275\u0275conditional(ctx.masterPlanData && ctx.groupedEquipment.length > 0 ? 37 : 38);
      \u0275\u0275advance(104);
      \u0275\u0275conditional(ctx.masterPlanData && ctx.equipmentList.length > 0 ? 141 : 142);
    }
  }, dependencies: [CommonModule, NgForOf, ToolbarModule, Toolbar, ButtonModule, Button, RippleModule, TableModule, InputTextModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ["\n\n[_nghost-%COMP%]     .master-plan-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n[_nghost-%COMP%]     .master-plan-split {\n  display: flex;\n  gap: 8px;\n  height: calc(100vh - 300px);\n  min-height: 600px;\n}\n[_nghost-%COMP%]     .master-plan-section {\n  background: var(--surface-card);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]     .master-plan-section.particulars {\n  flex: 0 0 50%;\n}\n[_nghost-%COMP%]     .master-plan-section.timeline {\n  flex: 0 0 50%;\n}\n[_nghost-%COMP%]     .section-header {\n  background: var(--primary-color);\n  color: var(--primary-contrast-color);\n  padding: 16px 24px;\n  font-size: 1.25rem;\n  font-weight: 600;\n  text-align: center;\n  flex-shrink: 0;\n}\n[_nghost-%COMP%]     .table-wrapper {\n  overflow-x: auto;\n  overflow-y: auto;\n  padding: 20px;\n  background: var(--surface-ground);\n  flex: 1;\n}\n[_nghost-%COMP%]     .table-wrapper::-webkit-scrollbar {\n  height: 10px;\n  width: 8px;\n}\n[_nghost-%COMP%]     .table-wrapper::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 10px;\n}\n[_nghost-%COMP%]     .table-wrapper::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 10px;\n}\n[_nghost-%COMP%]     .table-wrapper::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n[_nghost-%COMP%]     .particulars-table {\n  width: 100%;\n  min-width: 1200px;\n  border-collapse: collapse;\n  background: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]     .particulars-table th, \n[_nghost-%COMP%]     .particulars-table td {\n  border: 1px solid #e0e0e0;\n  padding: 12px 8px;\n  text-align: center;\n  font-size: 0.9rem;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]     .particulars-table th {\n  background: var(--primary-color);\n  font-weight: 600;\n  color: var(--primary-contrast-color);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n[_nghost-%COMP%]     .particulars-table thead tr:nth-child(2) th {\n  top: 37px;\n}\n[_nghost-%COMP%]     .particulars-table th:first-child {\n  min-width: 250px;\n  text-align: left;\n}\n[_nghost-%COMP%]     .particulars-table .section-header-row {\n  background:\n    linear-gradient(\n      90deg,\n      #f7fafc 0%,\n      #edf2f7 100%);\n  text-align: left;\n  font-weight: 600;\n  color: #2d3748;\n}\n[_nghost-%COMP%]     .particulars-table .item-row {\n  background: #fff;\n  font-weight: 600;\n  transition: background 0.2s;\n}\n[_nghost-%COMP%]     .particulars-table .item-row:hover {\n  background: #f7fafc;\n}\n[_nghost-%COMP%]     .particulars-table .sub-item {\n  background: #fafafa;\n  font-size: 0.85rem;\n  color: #4a5568;\n}\n[_nghost-%COMP%]     .particulars-table .sub-item:hover {\n  background: #f0f0f0;\n}\n[_nghost-%COMP%]     .particulars-table .red-text {\n  color: #e53e3e;\n  font-weight: 500;\n}\n[_nghost-%COMP%]     .maintenance-table {\n  width: 100%;\n  min-width: 3600px;\n  border-collapse: collapse;\n  background: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n[_nghost-%COMP%]     .maintenance-table th, \n[_nghost-%COMP%]     .maintenance-table td {\n  border: 1px solid #cbd5e0;\n  padding: 10px;\n  text-align: center;\n  min-width: 70px;\n  font-size: 0.85rem;\n}\n[_nghost-%COMP%]     .maintenance-table th {\n  font-weight: 600;\n  color: white;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n[_nghost-%COMP%]     .maintenance-table .inventory-header {\n  background: var(--primary-color);\n}\n[_nghost-%COMP%]     .maintenance-table .preventive-header {\n  background: var(--primary-color);\n}\n[_nghost-%COMP%]     .maintenance-table .corrective-header {\n  background: var(--primary-color);\n}\n[_nghost-%COMP%]     .maintenance-table .calibration-header {\n  background: var(--primary-color);\n}\n[_nghost-%COMP%]     .maintenance-table tbody td {\n  background: #fffbeb;\n  height: 32px;\n  transition: all 0.2s;\n  cursor: pointer;\n  font-weight: 500;\n}\n[_nghost-%COMP%]     .maintenance-table tbody td:hover {\n  background: #fef3c7;\n  box-shadow: inset 0 0 0 2px #f59e0b;\n}\n[_nghost-%COMP%]     .maintenance-table tbody tr:nth-child(even) td {\n  background: #fef9e7;\n}\n[_nghost-%COMP%]     .maintenance-table tbody tr:nth-child(even) td:hover {\n  background: #fef3c7;\n}\n@media (max-width: 1200px) {\n  [_nghost-%COMP%]     .master-plan-split {\n    flex-direction: column;\n    height: auto;\n  }\n  [_nghost-%COMP%]     .master-plan-section.particulars {\n    flex: 0 0 auto;\n  }\n  [_nghost-%COMP%]     .master-plan-section.timeline {\n    flex: 0 0 auto;\n  }\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%]     .section-header {\n    font-size: 1rem;\n    padding: 12px 16px;\n  }\n  [_nghost-%COMP%]     .table-wrapper {\n    padding: 12px;\n  }\n  [_nghost-%COMP%]     .particulars-table th, \n   [_nghost-%COMP%]     .particulars-table td {\n    padding: 8px 6px;\n    font-size: 0.8rem;\n  }\n  [_nghost-%COMP%]     .maintenance-table th, \n   [_nghost-%COMP%]     .maintenance-table td {\n    min-width: 60px;\n    padding: 8px;\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=masterplan.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MasterPlanComponent, [{
    type: Component,
    args: [{ selector: "app-masterplan", standalone: true, imports: [CommonModule, ToolbarModule, ButtonModule, RippleModule, TableModule, InputTextModule, FormsModule], template: `
        <p-toolbar styleClass="mb-4">
            <ng-template #start>
                <div class="flex items-center gap-2">
                    <i class="pi pi-calendar text-2xl" style="color: #667eea"></i>
                    <span class="text-xl font-bold">Master Plan</span>
                </div>
            </ng-template>
            <ng-template #end>
                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-2">
                        <label class="font-semibold">Year:</label>
                        <select [(ngModel)]="selectedYear" (ngModelChange)="onFilterChange()" class="p-inputtext" style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px;">
                            <option value="">All Years</option>
                            <option *ngFor="let year of years" [value]="year">
                                {{ year }}
                            </option>
                        </select>
                    </div>
                    <div class="flex items-center gap-2">
                        <label class="font-semibold">Laboratory:</label>
                        <select [(ngModel)]="selectedLaboratory" (ngModelChange)="onFilterChange()" class="p-inputtext" style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px;">
                            <option value="">Select Laboratory</option>
                            <option *ngFor="let lab of laboratories" [value]="lab.laboratoryId">
                                {{ lab.laboratoryName }}
                            </option>
                        </select>
                    </div>
                    <div class="flex items-center gap-2">
                        <label class="font-semibold">Category:</label>
                        <select [(ngModel)]="selectedCategory" (ngModelChange)="onFilterChange()" class="p-inputtext" style="padding: 8px 12px; border: 1px solid #ccc; border-radius: 4px;">
                            <option value="">All Categories</option>
                            <option *ngFor="let category of categories" [value]="category">
                                {{ category }}
                            </option>
                        </select>
                    </div>
                    <div class="flex items-center gap-2">
                        <p-button label="Print" icon="pi pi-print" severity="secondary" [outlined]="true" />
                        <p-button label="Export" icon="pi pi-upload" severity="success" [outlined]="true" />
                    </div>
                </div>
            </ng-template>
        </p-toolbar>

        <div class="master-plan-container">
            <div class="master-plan-split">
                <div class="master-plan-section particulars">
                    <div class="section-header">
                        <i class="pi pi-list mr-2"></i>
                        PARTICULARS
                    </div>

                    <div class="table-wrapper">
                        <table class="particulars-table">
                            <thead>
                                <tr>
                                    <th rowspan="2">Name of Machine / Equipment / Instrument</th>
                                    <th rowspan="2">Quantity</th>
                                    <th rowspan="2">Acquired</th>
                                    <th colspan="2">Serial No.</th>
                                    <th rowspan="2">Location</th>
                                    <th rowspan="2">Price</th>
                                    <th rowspan="2">Functional</th>
                                    <th rowspan="2">Under Repair</th>
                                </tr>
                                <tr>
                                    <th>Desktop</th>
                                    <th>MONITOR / CPU</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if (masterPlanData && groupedEquipment.length > 0) {
                                    <tr class="item-row">
                                        <td style="text-align: left; padding-left: 16px;">
                                            <strong>{{ masterPlanData.laboratoryName }}</strong
                                            ><br /><small style="color: #718096; font-size: 0.85em;">{{ masterPlanData.laboratoryLocation || 'N/A' }}</small>
                                        </td>
                                        <td>
                                            <strong>{{ masterPlanData.totalEquipment || equipmentList.length }}</strong>
                                        </td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td style="color: #2f855a; font-weight: 600;">{{ getTotalPrice() | number: '1.2-2' }}</td>
                                        <td>
                                            <span style="background: #c6f6d5; color: #276749; padding: 4px 12px; border-radius: 12px; font-weight: 600;">{{ getFunctionalCount() }}</span>
                                        </td>
                                        <td>
                                            <span style="background: #fed7d7; color: #c53030; padding: 4px 12px; border-radius: 12px; font-weight: 600;">{{ masterPlanData.underRepair || 0 }}</span>
                                        </td>
                                    </tr>
                                    @for (group of groupedEquipment; track group.displayName) {
                                        @for (equipment of group.equipment; track equipment.equipment.assetId; let i = $index) {
                                            <tr class="sub-item">
                                                <td style="text-align: left; padding-left: 32px;">
                                                    @if (i === 0) {
                                                        {{ group.displayName }}
                                                    }
                                                </td>
                                                <td></td>
                                                <td></td>
                                                @if (equipment.equipment.equipmentName?.toLowerCase().includes('desktop') || equipment.equipment.equipmentName?.toLowerCase().includes('cpu')) {
                                                    <td>{{ equipment.equipment.serialNumber }}</td>
                                                    <td></td>
                                                } @else if (equipment.equipment.equipmentName?.toLowerCase().includes('monitor')) {
                                                    <td></td>
                                                    <td>{{ equipment.equipment.serialNumber }}</td>
                                                } @else {
                                                    <td>{{ equipment.equipment.serialNumber }}</td>
                                                    <td></td>
                                                }
                                                <td>{{ equipment.equipment.location || 'N/A' }}</td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        }
                                    }
                                } @else {
                                    <tr class="section-header-row">
                                        <td colspan="9"><i class="pi pi-tag mr-2"></i>A) Frequently Used</td>
                                    </tr>

                                    <tr class="item-row">
                                        <td style="text-align: left; padding-left: 16px;">DATA SCIENCE LABORATORY</td>
                                        <td><strong>41</strong></td>
                                        <td>1/4/2019</td>
                                        <td>MMLY7SS0228130BC1D858B</td>
                                        <td>DTVPPSP33984604B929600</td>
                                        <td>Lab 9-204</td>
                                        <td style="color: #2f855a; font-weight: 600;">P56,810.00</td>
                                        <td><span style="background: #c6f6d5; color: #276749; padding: 4px 12px; border-radius: 12px; font-weight: 600;">39</span></td>
                                        <td><span style="background: #fed7d7; color: #c53030; padding: 4px 12px; border-radius: 12px; font-weight: 600;">2</span></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;">ICT Bldg. 9-204 2nd Flr.</td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC24858B</td>
                                        <td>DTVPPSP339846048AB9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC25858B</td>
                                        <td>DTVPPSP339846048AA9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;">ACER VERITON M2640</td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC26858B</td>
                                        <td>DTVPPSP339846048B69600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item red-text">
                                        <td style="text-align: left; padding-left: 32px;">Desktop w/21.5" Inches Led Monitor</td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC27859B</td>
                                        <td>DTVPPSP339846040A09600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 48px;">HDD: 1TB</td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC28858B</td>
                                        <td>DTVPPSP339846048A79600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 48px;">RAM: 8GB</td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC29858B</td>
                                        <td>DTVPPSP339846048B89600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 48px;">PROCESSOR: CORE/7</td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC2B858B</td>
                                        <td>DTVPPSP339846048B29600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 48px;">OS: WINDOWS 10</td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC2C858B</td>
                                        <td>DTVPPSP339846048A99600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC2D858B</td>
                                        <td>DTVPPSP339846048A29600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC2F858B</td>
                                        <td>DTVPPSP339846048BF9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC30858B</td>
                                        <td>DTVPPSP339846048AF9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC31858B</td>
                                        <td>DTVPPSP339846048A59600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC32858B</td>
                                        <td>DTVPPSP339846048AC9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC33858B</td>
                                        <td>DTVPPSP339846048BC9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC34858B</td>
                                        <td>DTVPPSP339846048B99600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC35858B</td>
                                        <td>DTVPPSP339846048979600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC38858B</td>
                                        <td>DTVPPSP339846048B99600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC37858B</td>
                                        <td>DTVPPSP339846048A19600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC38858B</td>
                                        <td>DTVPPSP339846048BC9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BC39858B</td>
                                        <td>DTVPPSP339846048B39600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BF85858B</td>
                                        <td>DTVPPSP339846048BD9600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr class="sub-item">
                                        <td style="text-align: left; padding-left: 32px;"></td>
                                        <td></td>
                                        <td></td>
                                        <td>MMLY7SS0228130BFB6858B</td>
                                        <td>DTVPPSP339846048B09600</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="master-plan-section timeline">
                    <div class="section-header">
                        <i class="pi pi-wrench mr-2"></i>
                        TIMELINE
                    </div>

                    <div class="table-wrapper">
                        <table class="maintenance-table">
                            <thead>
                                <tr>
                                    <th colspan="9" class="inventory-header">INVENTORY</th>
                                    <th colspan="9" class="preventive-header">PREVENTIVE</th>
                                    <th colspan="12" class="corrective-header">CORRECTIVE</th>
                                    <th colspan="12" class="calibration-header">CALIBRATION</th>
                                </tr>
                                <tr>
                                    <th class="inventory-header">APR</th>
                                    <th class="inventory-header">MAY</th>
                                    <th class="inventory-header">JUN</th>
                                    <th class="inventory-header">JUL</th>
                                    <th class="inventory-header">AUG</th>
                                    <th class="inventory-header">SEP</th>
                                    <th class="inventory-header">OCT</th>
                                    <th class="inventory-header">NOV</th>
                                    <th class="inventory-header">DEC</th>
                                    <th class="preventive-header">APR</th>
                                    <th class="preventive-header">MAY</th>
                                    <th class="preventive-header">JUN</th>
                                    <th class="preventive-header">JUL</th>
                                    <th class="preventive-header">AUG</th>
                                    <th class="preventive-header">SEP</th>
                                    <th class="preventive-header">OCT</th>
                                    <th class="preventive-header">NOV</th>
                                    <th class="preventive-header">DEC</th>
                                    <th class="corrective-header">JAN</th>
                                    <th class="corrective-header">FEB</th>
                                    <th class="corrective-header">MAR</th>
                                    <th class="corrective-header">APR</th>
                                    <th class="corrective-header">MAY</th>
                                    <th class="corrective-header">JUN</th>
                                    <th class="corrective-header">JUL</th>
                                    <th class="corrective-header">AUG</th>
                                    <th class="corrective-header">SEP</th>
                                    <th class="corrective-header">OCT</th>
                                    <th class="corrective-header">NOV</th>
                                    <th class="corrective-header">DEC</th>
                                    <th class="calibration-header">JAN</th>
                                    <th class="calibration-header">FEB</th>
                                    <th class="calibration-header">MAR</th>
                                    <th class="calibration-header">APR</th>
                                    <th class="calibration-header">MAY</th>
                                    <th class="calibration-header">JUN</th>
                                    <th class="calibration-header">JUL</th>
                                    <th class="calibration-header">AUG</th>
                                    <th class="calibration-header">SEP</th>
                                    <th class="calibration-header">OCT</th>
                                    <th class="calibration-header">NOV</th>
                                    <th class="calibration-header">DEC</th>
                                </tr>
                            </thead>
                            <tbody>
                                @if (masterPlanData && equipmentList.length > 0) {
                                    @for (equipment of equipmentList; track equipment.equipment.assetId) {
                                        <tr>
                                            <!-- INVENTORY Section - 9 months (APR-DEC: 4-12) -->
                                            @for (month of [4, 5, 6, 7, 8, 9, 10, 11, 12]; track month) {
                                                <td>{{ getMaintenanceMark(equipment, month, 'inventory') }}</td>
                                            }
                                            <!-- PREVENTIVE Section - 9 months (APR-DEC: 4-12) -->
                                            @for (month of [4, 5, 6, 7, 8, 9, 10, 11, 12]; track month) {
                                                <td>{{ getMaintenanceMark(equipment, month, 'preventive') }}</td>
                                            }
                                            <!-- CORRECTIVE Section - 12 months (JAN-DEC: 1-12) -->
                                            @for (month of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; track month) {
                                                <td>{{ getMaintenanceMark(equipment, month, 'corrective') }}</td>
                                            }
                                            <!-- CALIBRATION Section - 12 months (JAN-DEC: 1-12) -->
                                            @for (month of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; track month) {
                                                <td>{{ getMaintenanceMark(equipment, month, 'calibration') }}</td>
                                            }
                                        </tr>
                                    }
                                } @else {
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `, styles: ["/* angular:styles/component:scss;377459494aa2eca7bc900a49468caca7d7ba041e0f78af213c4f57ebab029786;C:/Users/jeric/Documents/2026 files/LAMS-COPY/LAMS-COPY/src/app/pages/masterplan/masterplan.ts */\n:host ::ng-deep .master-plan-container {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n:host ::ng-deep .master-plan-split {\n  display: flex;\n  gap: 8px;\n  height: calc(100vh - 300px);\n  min-height: 600px;\n}\n:host ::ng-deep .master-plan-section {\n  background: var(--surface-card);\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n:host ::ng-deep .master-plan-section.particulars {\n  flex: 0 0 50%;\n}\n:host ::ng-deep .master-plan-section.timeline {\n  flex: 0 0 50%;\n}\n:host ::ng-deep .section-header {\n  background: var(--primary-color);\n  color: var(--primary-contrast-color);\n  padding: 16px 24px;\n  font-size: 1.25rem;\n  font-weight: 600;\n  text-align: center;\n  flex-shrink: 0;\n}\n:host ::ng-deep .table-wrapper {\n  overflow-x: auto;\n  overflow-y: auto;\n  padding: 20px;\n  background: var(--surface-ground);\n  flex: 1;\n}\n:host ::ng-deep .table-wrapper::-webkit-scrollbar {\n  height: 10px;\n  width: 8px;\n}\n:host ::ng-deep .table-wrapper::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 10px;\n}\n:host ::ng-deep .table-wrapper::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 10px;\n}\n:host ::ng-deep .table-wrapper::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n:host ::ng-deep .particulars-table {\n  width: 100%;\n  min-width: 1200px;\n  border-collapse: collapse;\n  background: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n:host ::ng-deep .particulars-table th,\n:host ::ng-deep .particulars-table td {\n  border: 1px solid #e0e0e0;\n  padding: 12px 8px;\n  text-align: center;\n  font-size: 0.9rem;\n  white-space: nowrap;\n}\n:host ::ng-deep .particulars-table th {\n  background: var(--primary-color);\n  font-weight: 600;\n  color: var(--primary-contrast-color);\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n:host ::ng-deep .particulars-table thead tr:nth-child(2) th {\n  top: 37px;\n}\n:host ::ng-deep .particulars-table th:first-child {\n  min-width: 250px;\n  text-align: left;\n}\n:host ::ng-deep .particulars-table .section-header-row {\n  background:\n    linear-gradient(\n      90deg,\n      #f7fafc 0%,\n      #edf2f7 100%);\n  text-align: left;\n  font-weight: 600;\n  color: #2d3748;\n}\n:host ::ng-deep .particulars-table .item-row {\n  background: #fff;\n  font-weight: 600;\n  transition: background 0.2s;\n}\n:host ::ng-deep .particulars-table .item-row:hover {\n  background: #f7fafc;\n}\n:host ::ng-deep .particulars-table .sub-item {\n  background: #fafafa;\n  font-size: 0.85rem;\n  color: #4a5568;\n}\n:host ::ng-deep .particulars-table .sub-item:hover {\n  background: #f0f0f0;\n}\n:host ::ng-deep .particulars-table .red-text {\n  color: #e53e3e;\n  font-weight: 500;\n}\n:host ::ng-deep .maintenance-table {\n  width: 100%;\n  min-width: 3600px;\n  border-collapse: collapse;\n  background: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n:host ::ng-deep .maintenance-table th,\n:host ::ng-deep .maintenance-table td {\n  border: 1px solid #cbd5e0;\n  padding: 10px;\n  text-align: center;\n  min-width: 70px;\n  font-size: 0.85rem;\n}\n:host ::ng-deep .maintenance-table th {\n  font-weight: 600;\n  color: white;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n:host ::ng-deep .maintenance-table .inventory-header {\n  background: var(--primary-color);\n}\n:host ::ng-deep .maintenance-table .preventive-header {\n  background: var(--primary-color);\n}\n:host ::ng-deep .maintenance-table .corrective-header {\n  background: var(--primary-color);\n}\n:host ::ng-deep .maintenance-table .calibration-header {\n  background: var(--primary-color);\n}\n:host ::ng-deep .maintenance-table tbody td {\n  background: #fffbeb;\n  height: 32px;\n  transition: all 0.2s;\n  cursor: pointer;\n  font-weight: 500;\n}\n:host ::ng-deep .maintenance-table tbody td:hover {\n  background: #fef3c7;\n  box-shadow: inset 0 0 0 2px #f59e0b;\n}\n:host ::ng-deep .maintenance-table tbody tr:nth-child(even) td {\n  background: #fef9e7;\n}\n:host ::ng-deep .maintenance-table tbody tr:nth-child(even) td:hover {\n  background: #fef3c7;\n}\n@media (max-width: 1200px) {\n  :host ::ng-deep .master-plan-split {\n    flex-direction: column;\n    height: auto;\n  }\n  :host ::ng-deep .master-plan-section.particulars {\n    flex: 0 0 auto;\n  }\n  :host ::ng-deep .master-plan-section.timeline {\n    flex: 0 0 auto;\n  }\n}\n@media (max-width: 768px) {\n  :host ::ng-deep .section-header {\n    font-size: 1rem;\n    padding: 12px 16px;\n  }\n  :host ::ng-deep .table-wrapper {\n    padding: 12px;\n  }\n  :host ::ng-deep .particulars-table th,\n  :host ::ng-deep .particulars-table td {\n    padding: 8px 6px;\n    font-size: 0.8rem;\n  }\n  :host ::ng-deep .maintenance-table th,\n  :host ::ng-deep .maintenance-table td {\n    min-width: 60px;\n    padding: 8px;\n    font-size: 0.75rem;\n  }\n}\n/*# sourceMappingURL=masterplan.css.map */\n"] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MasterPlanComponent, { className: "MasterPlanComponent", filePath: "src/app/pages/masterplan/masterplan.ts", lineNumber: 2096 });
})();

// src/app/pages/pages.routes.ts
var pageRoutes = [
  { path: "users", component: UsersComponent },
  { path: "campuses", component: CampusesComponent },
  { path: "departments", component: DepartmentsComponent },
  { path: "assetcategory", children: ASSET_CATEGORY_ROUTES },
  // Maintenance property pages
  { path: "maintenance/services", component: MaintenanceServicesComponent },
  { path: "maintenance/status", component: MaintenanceStatusComponent },
  { path: "maintenance/priority-level", component: MaintenancePriorityLevelComponent },
  { path: "maintenance/types", component: MaintenanceTypesComponent },
  { path: "documentation", component: Documentation },
  { path: "crud", component: AssetsComponent },
  { path: "requestmaintenance", component: RequestmaintenanceComponent },
  { path: "labschedule", component: LabScheduleComponent },
  { path: "laboratories", component: LaboratoriesComponent },
  { path: "laboratory/:id", component: LaboratoriesComponent },
  { path: "masterplan", component: MasterPlanComponent },
  // Reports
  { path: "reports", component: ReportsComponent },
  { path: "reports/preventive", component: PreventiveReportComponent },
  { path: "reports/corrective", component: CorrectiveReportComponent },
  { path: "reports/calibration", component: CalibrationReportComponent },
  { path: "**", redirectTo: "/notfound" }
];
var pages_routes_default = pageRoutes;
export {
  pages_routes_default as default,
  pageRoutes
};
//# sourceMappingURL=chunk-TRXBMQZC.js.map
