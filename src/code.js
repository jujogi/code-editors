const code = `apiVersion: "apps/v1"
kind: "DaemonSet"
metadata:
  labels:
    k8s-app: "aws-node"
  name: "aws-node"
  namespace: "kube-system"
spec:
  selector:
    matchLabels:
      k8s-app: "aws-node"
  template:
    metadata:
      labels:
        k8s-app: "aws-node"
      annotations:
        iam.amazonaws.com/role: eks-worker-node-REPLACE_ENV
  updateStrategy:
    rollingUpdate:
      maxUnavailable: "10%"
    type: "RollingUpdate"
`;

export default code;