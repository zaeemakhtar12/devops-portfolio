// Interactive Terminal Commands and Outputs
const terminalData = {
  profile: {
    command: "curl -s https://deploywithzaeem.tech/api/profile",
    output: `{
  <span class="json-key">"name"</span>: <span class="json-val">"Zaeem Akhtar"</span>,
  <span class="json-key">"role"</span>: <span class="json-val">"Cloud & DevOps Engineer"</span>,
  <span class="json-key">"domain"</span>: <span class="json-val">"deploywithzaeem.tech"</span>,
  <span class="json-key">"focus"</span>: [<span class="json-val">"Kubernetes"</span>, <span class="json-val">"Terraform"</span>, <span class="json-val">"AWS"</span>, <span class="json-val">"CI/CD"</span>],
  <span class="json-key">"status"</span>: <span class="json-val">"Available for opportunities"</span>,
  <span class="json-key">"uptime"</span>: <span class="json-num">99.99</span>
}`
  },
  terraform: {
    command: "terraform plan -out=tfplan",
    output: `<span style="color:#38bdf8">Terraform will perform the following actions:</span>

  <span style="color:#34d399">+ module.vpc.aws_vpc.main</span>
  <span style="color:#34d399">+ module.eks.aws_eks_cluster.prod</span> (version: "1.30")
  <span style="color:#34d399">+ module.rds.aws_db_instance.postgres</span> (multi_az: true)

<span style="color:#34d399; font-weight: bold;">Plan:</span> 14 to add, 0 to change, 0 to destroy.
<span style="color:#9ca3af;">Saved plan file: tfplan (Ready for gitops apply)</span>`
  },
  k8s: {
    command: "kubectl get pods -n production",
    output: `NAME                                READY   STATUS    RESTARTS   AGE
api-gateway-7d8b5c9f4-2q8zj         1/1     Running   0          4d2h
auth-service-5f6d7c8b9-x9p4l        1/1     Running   0          4d2h
payment-service-8b9c7d6e5-m1k3p     1/1     Running   0          18h
argocd-server-64f79b76c-v5t7s       1/1     Running   0          12d`
  },
  pipeline: {
    command: "gh run list --limit 1",
    output: `<span style="color:#34d399">✓</span> Deploy to GitHub Pages   main   push   <span style="color:#34d399">success</span>   32s   #42
<span style="color:#9ca3af;">Artifact uploaded & deployed to deploywithzaeem.tech</span>`
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Terminal Tab Switching
  const tabs = document.querySelectorAll(".term-tab");
  const termCmd = document.getElementById("terminal-cmd");
  const termOutput = document.getElementById("terminal-output");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const key = tab.getAttribute("data-tab");
      if (terminalData[key]) {
        termCmd.textContent = terminalData[key].command;
        termOutput.innerHTML = terminalData[key].output;
      }
    });
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // Copy Email to Clipboard helper
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = copyBtn.getAttribute("data-email");
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = "<span>✓ Copied!</span>";
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, 2000);
      });
    });
  }
});
