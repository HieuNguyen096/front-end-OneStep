import http from './http';

export interface KhachHang {
  id?: number | string;
  hoTen: string;
  email?: string;
  soDienThoai: string;
}

export const khachHangApi = {
  async hienThi() {
    const res = await http.get('/khach-hang/hien-thi');
    return Array.isArray(res.data) ? res.data : res.data?.data || [];
  },

  async themNhanh(payload: KhachHang) {
    const res = await http.post('/khach-hang/them-nhanh', payload);
    return res.data?.data || res.data;
  }
};

export default khachHangApi;


