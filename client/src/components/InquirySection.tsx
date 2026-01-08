import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
// import { insertInquirySchema, regions, type InsertInquiry } from "@shared/schema";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Loader2,
  MessageSquare,
  Shield,
  Gift,
} from "lucide-react";

const benefits = [
  { icon: Gift, text: "무료 입지 분석 리포트 제공" },
  { icon: Shield, text: "개인정보 철저히 보호" },
  { icon: Clock, text: "24시간 이내 담당자 연락" },
];

const contactInfo = [
  { icon: Phone, label: "전화 상담", value: "070-7721-0466", href: "tel:070-7721-0466" },
  { icon: Mail, label: "이메일", value: "help@wizley.co.kr", href: "mailto:help@wizley.co.kr" },
  { icon: MapPin, label: "본사", value: "경기도 용인시 기흥구 공세로 150-29, 비01-엔46호(공세동)", href: "#" },
  { icon: Clock, label: "상담 시간", value: "평일 09:00 - 18:00", href: "#" },
];


export default function InquirySection() {
    return <h1>testdddddddddddddd</h1>

}
